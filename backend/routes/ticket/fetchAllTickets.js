/* fetchAllTickets.js is used to create an end point for passenger to fetch all recent purchased ticket*/

const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

const con = require("../database");

router.get("/", fetchuser, async (req, res) => {
  let success = false;

  try {
    const fetchTicket = `SELECT * FROM ticket where p_id='${req.user.id}';`;

    // Fetching tickets
    con.query(fetchTicket, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres) {
        qres.map((i) => {
          let date = new Date(i.expires);
          const expires = date.toLocaleString();
          i.expires = expires;

          date = new Date(i.t_time);
          const time = date.toLocaleString();
          i.t_time = time;
        });
        success = true;
        res.json({ success, tickets: qres });
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
