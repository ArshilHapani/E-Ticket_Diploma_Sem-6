/* createTicket.js is used to create an end point for passenger to purchashed ticket and store into database*/

const express = require("express");
const router = express.Router();
const con = require("../database");

// Middlewares used to create ticket
const fetchuser = require("../middleware/fetchUser");
const checkPassenger = require("../middleware/checkPassenger");
const fetchloc = require("../middleware/fetchLoc");
const findDistance = require("../middleware/findDistance");

router.use(fetchuser, checkPassenger, fetchloc, findDistance);

router.put("/", fetchloc, findDistance, async (req, res) => {
  const quantity = req.body.quantity;
  const d = new Date();
  let success = false;
  let amount = 0,
    expires =
      d.getFullYear() +
      "-" +
      (parseInt(("0" + d.getMonth()).slice(-2)) + 1) +
      "-" +
      ("0" + d.getDate()).slice(-2);

  const year = ("0" + d.getFullYear()).slice(3);
  const month = ("0" + d.getMonth()).slice(-2);
  const date = ("0" + d.getDate()).slice(-2);
  const shours = ("0" + d.getHours()).slice(-2);
  const min = ("0" + d.getMinutes()).slice(-2);
  const sec = ("0" + d.getSeconds()).slice(-2);
  const hours = parseInt(("0" + d.getHours()).slice(-2));
  const milsec = parseInt(("0" + d.getMilliseconds()).slice(-2));

  if (req.dist >= 1 && req.dist <= 2) {
    amount = 2;
    expires +=
      " " + (hours + 2 > 23 ? "23-59-59" : hours + 2 + "-" + min + "-" + sec);
  } else if (req.dist >= 3 && req.dist <= 4) {
    amount = 4;
    expires +=
      " " + (hours + 3 > 23 ? "23-59-59" : hours + 3 + "-" + min + "-" + sec);
  } else if (req.dist >= 5 && req.dist <= 6) {
    amount = 6;
    expires +=
      " " + (hours + 4 > 23 ? "23-59-59" : hours + 4 + "-" + min + "-" + sec);
  } else if (req.dist >= 7 && req.dist <= 8) {
    amount = 8;
    expires +=
      " " + (hours + 5 > 23 ? "23-59-59" : hours + 5 + "-" + min + "-" + sec);
  } else if (req.dist >= 9 && req.dist <= 10) {
    amount = 10;
    expires +=
      " " + (hours + 6 > 23 ? "23-59-59" : hours + 6 + "-" + min + "-" + sec);
  } else if (req.dist >= 11 && req.dist <= 12) {
    amount = 12;
    expires +=
      " " + (hours + 6 > 23 ? "23-59-59" : hours + 6 + "-" + min + "-" + sec);
  } else if (req.dist >= 11 && req.dist <= 14) {
    amount = 16;
    expires +=
      " " + (hours + 6 > 23 ? "23-59-59" : hours + 6 + "-" + min + "-" + sec);
  } else if (req.dist >= 11 && req.dist <= 18) {
    amount = 20;
    expires +=
      " " + (hours + 6 > 23 ? "23-59-59" : hours + 6 + "-" + min + "-" + sec);
  } else if (req.dist >= 11 && req.dist <= 20) {
    amount = 22;
    expires +=
      " " + (hours + 6 > 23 ? "23-59-59" : hours + 6 + "-" + min + "-" + sec);
  } else if (req.dist >= 11 && req.dist <= 40) {
    amount = 24;
    expires +=
      " " + (hours + 6 > 23 ? "23-59-59" : hours + 6 + "-" + min + "-" + sec);
  }

  const fetchBalance = `SELECT p_balance FROM passenger WHERE p_id='${req.user.id}'`;
  const subBal = `UPDATE passenger SET p_balance=p_balance-${amount} WHERE p_id='${req.user.id}';`;
  try {
    con.beginTransaction();

    con.query(fetchBalance, (err, qres) => {
      if (qres[0].p_balance - amount * quantity < 0) {
        res.json({ success, msg: "Your Balance is less than fare." });
      } else {
        let i;
        let f = true;
        let tid = "T" + year + month + date + shours + min + sec;
        for (i = 0; i < quantity; ++i) {
          if (f) {
            tid = "T" + year + month + date + shours + min + sec + (milsec + i);
          } else {
            tid =
              "T" + year + month + date + shours + min + (parseInt(sec) + 1);
            const milisec = milsec + i;
            tid += milisec.toString();
          }
          const inTicket = `INSERT INTO ticket VALUES ('${tid}','${req.user.id}','${req.start.st_name}','${req.dest.st_name}','${expires}',(SELECT CURRENT_TIMESTAMP()),${amount});`;

          // Inserting new ticket
          con.query(inTicket, (err, qres) => {
            if (err) {
              console.log(err.message);
              f = false;
              i = 0;
            } else if (qres) {
              // Subtracting balance of passenger
              con.query(subBal, (err, qres) => {
                if (err) {
                  console.log(err.message);
                  con.rollback();
                  res.json({ success });
                } else if (qres) {
                  con.commit();
                  if (i === quantity) {
                    ++i;
                    success = true;
                    res.send({ success });
                  }
                } else {
                  con.rollback();
                  res.json({ success });
                }
              });
            } else {
              res.json({ success });
            }
          });
        }
      }
    });
  } catch (error) {
    res.json({ error: error.message });
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
