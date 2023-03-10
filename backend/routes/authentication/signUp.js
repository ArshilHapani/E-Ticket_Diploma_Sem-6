/* signup.js is used to create an end point for user to sign up into system and 
it will send JWT in response and store information about user into database if that user does not exist */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const con = require("../database"); // Connection object to run query

const SECRET_MSG = "E-TICKET"; // Secret message to send in JWT for authentication

router.post("/", async (req, res) => {
  const { uname, pwd, name, email, no, dob } = req.body;
  let success = true;

  // Creating instance of Date to generate unique id for user
  const d = new Date();
  const id =
    "P" +
    ("0" + d.getFullYear()).slice(3) +
    ("0" + d.getMonth()).slice(-2) +
    ("0" + d.getDate()).slice(-2) +
    ("0" + d.getHours()).slice(-2) +
    ("0" + d.getMinutes()).slice(-2) +
    ("0" + d.getSeconds()).slice(-2) +
    ("0" + d.getMilliseconds()).slice(-2);


  try {
    
    const findUser = `SELECT p_uname FROM passenger WHERE p_uname='${uname}'`;
    // Checks user with this username exist or not
    con.query(findUser, async (err, qres) => {
      if (err) {
        console.log(err.message);
      } else if (qres.length > 0) {
        success = false;
        res.json({
          success,
          msg: "A user with this Username already exists",
        });
      } else {

        // Creating salt to perform hash operation on password
        const salt = await bcrypt.genSalt(10);
        // Generating hash value according to pwd and salt
        const secPass = await bcrypt.hash(pwd, salt);

        con.beginTransaction();

        // Inserting login related information
        const inLogin = `INSERT INTO login VALUES ('${id}','${uname}','${secPass}')`;
        con.query(inLogin, (err, qres) => {
          if (err) {
            console.log(err.message);
            success = false;
            res.json({ success });
          } else if (qres) {

            // Inserting Data of Passanger
            const inpassenger = `INSERT INTO passenger (p_uname, p_id, p_name, p_email, p_no, p_dob, p_balance) VALUES ('${uname}','${id}','${name}','${email}',${
              no ? no : null
            },'${dob}',${0.0})`;
            con.query(inpassenger, (err, qres) => {
              if (err) {
                console.log(err.message);
                con.rollback(); // Undo changes into database
                success = false;
                res.json({ success });
              }else if (qres) {
                con.commit(); // Saving changes into database
              }else{
                con.rollback(); // Undo changes into database
                success = false;
                res.json({ success });
              }
            });
          } else {
            success = false;
            res.json({ success });
          }
        });

        // Storing id of user in object to create JWT
        const data = {
          id: id,
        };

        // sending JWT to user
        const authToken = jwt.sign(data, SECRET_MSG);
        res.json({ success, authToken });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
