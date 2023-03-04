/* fetchAllStation.js is used to create an end point for passenger to fetch all availabel stations to purchase ticket*/

const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

const con = require("../database");

router.get("/", fetchuser, async (req, res) => {
  let success = false;

  try {
    const fetchTicket = `SELECT st_id, st_name FROM station;`;

    // Fetching tickets
    con.query(fetchTicket, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres) {
        success = true;
        res.json({ success, stations: qres });
      } else {
        res.json({ success });
      }
    });
  } catch (error) {
    res.json({ error: error.message });
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
