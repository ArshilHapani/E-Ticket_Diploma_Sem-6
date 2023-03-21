/* sendPin.js is used to create an end point for user to send mail for verification to change the password */

import { Router } from "express";
const router = Router();
import { createTransport } from "nodemailer";
import con from "../database.js";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "learner164@gmail.com",
    pass: "pmdbxfrbmwsfpmmt",
  },
});

router.post("/", (req, res) => {
  const { uname, email } = req.body;
  let success = false;
  const pin = Math.floor(Math.random() * 1000000 + 1);

  if (uname) {
    const getUser = `SELECT id FROM login WHERE uname='${uname}';`;

    con.query(getUser, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres.length > 0) {
        const checkPassenger = `SELECT p_email FROM passenger WHERE p_id='${qres[0].id}';`;
        const checkConductor = `SELECT c_email FROM conductor WHERE c_id='${qres[0].id}';`;
        const checkAdmin = `SELECT a_email FROM admin WHERE a_id='${qres[0].id}';`;

        const user = new Promise((resolve, reject) => {
          con.query(checkPassenger, (err, qres) => {
            if (err) {
              console.log(err.message);
              res.json({ success });
            } else if (qres.length > 0) {
              resolve(qres[0].p_email);
            } else {
              con.query(checkConductor, (err, qres) => {
                if (err) {
                  console.log(err.message);
                  res.json({ success });
                } else if (qres.length > 0) {
                  resolve(qres[0].c_email);
                } else {
                  con.query(checkAdmin, (err, qres) => {
                    if (err) {
                      console.log(err.message);
                      res.json({ success });
                    } else if (qres.length > 0) {
                      resolve(qres[0].a_email);
                    } else {
                      res.json({ success });
                    }
                  });
                }
              });
            }
          });
        });

        user
          .then((val) => {
            const mailOptions = {
              from: "learner164@gmail.com",
              to: val,
              subject: "Your Code",
              text: pin.toString(),
            };

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
                res.json({ success });
              } else if (info) {
                success = true;
                res.json({ success, pin: pin, msg: `OTP sent to ${val}` });
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.json({ success, msg: "User does not exist" });
      }
    });
  } else if (email) {
    const mailOptions = {
      from: "learner164@gmail.com",
      to: val,
      subject: "Your Code",
      text: email,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.json({ success });
      } else if (info) {
        success = true;
        res.json({ success, pin: pin, msg: `OTP sent to ${email}` });
      }
    });
  } else {
    res.json({ success });
  }
});

export default router;
