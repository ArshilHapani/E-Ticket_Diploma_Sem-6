/* scanTicket.js is used to create an end point for conductor that
will take ticket-id as tid to check that purchashed ticket is expired or not*/

const express = require("express");
const router = express.Router();

const con = require("../database");

router.post("/", async (req, res) => {
  const { tid } = req.body;
  let success = true;

  try {
    const fetchTicket = `SELECT *,IF((SELECT DATE((SELECT expires FROM ticket where t_id='${tid}')))>=(SELECT CURRENT_DATE()),IF((SELECT TIME((SELECT expires FROM ticket where t_id='${tid}')))>=(SELECT CURRENT_TIME()),'valid','expired'),'expired') as ticket FROM ticket WHERE t_id='${tid}';`;

    con.query(fetchTicket, (err, qres) => {
      if (err) {
        console.log(err.message);
        success = false;
        res.json({ success });
      } else if (qres.length > 0) {
        res.json({ success, ticket: qres });
      } else {
        success = false;
        res.json({ success, msg:"Ticket does not exist" });
      }
    });
  } catch (error) {
    res.json({ error: error.message });
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
