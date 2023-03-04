const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const con = require("../database");

const SECRET_MSG = "E-TICKET";

router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "Enter a valid Email").isEmail(),
    body("pwd", "Password must be 8 characters").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const { uname, pwd, name, email, no, dob } = req.body;
    let success = true;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, error: errors.array() });
    }

    //check whether the user with this email exist already
    try {
        const findUser = `SELECT id FROM login WHERE uname='${uname}'`;
        // Checks user with this email exist or not
        con.query(findUser, (err, res) => {
          if(err){
            console.log(err.message);
          }
          if(res){
            console.log(res);
          }
        });

        // if (user) {
        //   success = false;
        //   return res.status(400).json({
        //     success,
        //     error: "A user with this E-mail already exists try new E-mail",
        //   });
        // }

      const d = new Date();
      const id = 'C' + ('0' + d.getFullYear()).slice(3) + ('0' + d.getMonth()).slice(-2) + ('0' + d.getDate()).slice(-2) + ('0' + d.getHours()).slice(-2) + ('0' + d.getMinutes()).slice(-2) + ('0' + d.getSeconds()).slice(-2) + ('0' + d.getMilliseconds()).slice(-2);

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(pwd, salt);

      const transaction = "START TRANSACTION;";
      const rollback = "ROLLBACK;";
      const commit = "COMMIT";
      
      const inLogin = `INSERT INTO login VALUES ('${id}','${uname}','${secPass}')`;
      const inpassenger = `INSERT INTO conductor VALUES ('${uname}','${id}','${name}','${email}',${no?no:null},'${dob}',NULL)`;

      con.query(transaction);
      con.query(inLogin, (err, qres) => {
        if (err) {
          console.log(err.message);
          success = false;
          res.json({ success });
        }else if(qres){
          console.log("Inserted in login");
          con.query(inpassenger, (err, qres) => {
            if (err) {
              console.log(err.message);
              con.query(rollback);
              success = false;
              res.json({ success });
            }else if(qres){
              console.log("Inserted in Conductor");
              con.query(commit);
              const data = {
                id: id,
              };
              const authToken = jwt.sign(data, SECRET_MSG);
              res.json({ success, authToken });
            } else {
              con.query(rollback);
              success = false;
              res.json({ success });
            }
          });
        }else{
          success = false;
          res.json({ success })
        }
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
