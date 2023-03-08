/* fetchConductor.js is used to create an end point for conductor
to send their data and show them in UI after they are logged into the system*/

const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

const con = require("../database");

router.get("/", fetchuser, async (req, res) => {
  try {
    let success = false;

    const fetchConductor = `SELECT * FROM conductor WHERE c_id='${req.user.id}';`;

    // Get the data of passenger
    con.query(fetchConductor, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres) {
        success = true;
        res.json({ success, "conductor": qres[0] })
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