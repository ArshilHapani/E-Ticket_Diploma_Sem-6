/* login.js is used to create an end point for user to log into system and 
it will send JWT in response if password and usename is correct */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const con = require("../database"); // Connection object to run query

const SECRET_MSG = "E-TICKET"; // Secret message to send in JWT for authentication //TODO make env

router.post("/", async (req, res) => {
  const { uname, password } = req.body; // fetching data from request body

  let success = false; // parameter
  let user; // variable to store user's data

  try {
    // Query to find the user
    const findUser = `SELECT * FROM login WHERE uname='${uname}'`;

    con.query(findUser, async (err, qres) => {
      if (err) {
        console.log(err.message);
      } else if (qres) {
        user = qres;

        // Checking user exist or not
        if (user.length == 0) {
          res.json({ success, msg: "Invalid Username" });
        } else {
          // Checking password is correct or not
          const passwordCompare = await bcrypt.compare(password, user[0].pwd);

          if (!passwordCompare) {
            return res.json({ success, msg: "Invalid Password" });
          }

          // Storing id of user in object to create JWT
          const data = {
            id: user[0].id,
          };

          // sending JWT to user
          const authToken = jwt.sign(data, SECRET_MSG);
          res.json({ success: true, authToken: authToken });
        }
      } else {
        return res.json({ success, msg: "Enter valid data" });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
