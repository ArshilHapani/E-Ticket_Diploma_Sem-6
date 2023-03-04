/* fetchTicket.js is used to create an end point for passenger to fetch recent purchashed ticket as per limit*/

const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

const con = require("../database");

router.post("/", fetchuser, async (req, res) => {
  const { limit, tid } = req.body;   // Get limit to fetch tickets
  let success = false;

  try {
    let fetchTicket;
    if(limit){
      fetchTicket = `SELECT * FROM ticket where p_id='${req.user.id}' LIMIT ${limit};`;
    } else if(tid){
      fetchTicket = `SELECT * FROM ticket where p_id='${req.user.id}' && t_id='${tid}';`;
    }

    // Fetching tickets
    con.query(fetchTicket, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres) {
        let date = new Date(qres[0].expires);
        const expires = date.toLocaleString();
        qres[0].expires = expires;

        date = new Date(qres[0].t_time);
        const time = date.toLocaleString();
        qres[0].t_time = time;
        success = true;
        res.json({ success, ticket: qres });
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
