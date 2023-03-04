/* fetchPassenger.js is used to create an end point for passenger
to send their data and show them in UI after they are logged into the system*/

const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

const con = require("../database");
const { DATETIME, TIME } = require("mysql/lib/protocol/constants/types");

router.get("/", fetchuser, async (req, res) => {
  try {
    var success = false;

    const fetchPassenger = `SELECT * FROM passenger WHERE p_id='${req.user.id}';`;

    // Get the data of passenger
    con.query(fetchPassenger, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres) {
        const dateobj = new Date(qres[0].p_dob);
        const dob = dateobj.toLocaleString();
        const date = dob.substring(0,dob.length - 13);
        qres[0].p_dob = date;
        success = true;
        res.json({ success, "passenger": qres[0] })
      } else {
        res.json({ success });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
