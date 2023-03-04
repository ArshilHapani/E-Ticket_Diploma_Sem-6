/* changePwd.js is used to create an end point for user to change their password by authentication and verification using email */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const con = require("../database");   // Connection object to run query

const SECRET_MSG = "E-TICKET";    // Secret message to send in JWT for authentication

router.post("/", async (req, res) => {
  const { uname, password } = req.body; // fetching data from request body

  let success = false; // parameter
  let user; // variable to store user's data

  try {
    const changePwd = `UPDATE login SET pwd = '${secPass}' WHERE uname='${uname}'`
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
