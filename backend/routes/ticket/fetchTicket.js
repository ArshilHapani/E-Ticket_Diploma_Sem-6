/* fetchTicket.js is used to create an end point for passenger to fetch recent purchashed ticket, particular ticket, all tickets of a passenger*/

import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from "../middleware/fetchUser.js";
import checkAdmin from "../middleware/checkAdmin.js";

router.use(fetchuser);

let success = false;

router.post("/", async (req, res) => {
  const { limit, tid } = req.body; // Get limit to fetch tickets
  let fetchTicket;

  if (limit) {
    // fetchTicket = `SELECT * FROM ticket WHERE p_id='${req.user.id}' LIMIT ${limit} ORDER BY t_time DESC;`;
    fetchTicket = `SELECT * FROM ticket WHERE p_id='${req.user.id}' LIMIT ${limit};`;
  } else if (tid) {
    // fetchTicket = `SELECT * FROM ticket WHERE p_id='${req.user.id}' && t_id='${tid} ORDER BY t_time DESC';`;
    fetchTicket = `SELECT * FROM ticket WHERE p_id='${req.user.id}' && t_id='${tid}';`;
  } else {
    // fetchTicket = `SELECT * FROM ticket WHERE p_id='${req.user.id}' ORDER BY t_time DESC;`;
    fetchTicket = `SELECT * FROM ticket WHERE p_id='${req.user.id}';`;
  }

  runQuery(req, res, fetchTicket);
});

router.post("/fetch", checkAdmin, async (req, res) => {
  const { id, limit, tid } = req.body; // Get limit to fetch tickets
  let fetchTicket;

  if (limit) {
    fetchTicket = `SELECT * FROM ticket WHERE p_id='${id}' LIMIT ${limit} ORDER BY t_time DESC;`;
  } else if (tid) {
    fetchTicket = `SELECT * FROM ticket WHERE p_id='${id}' && t_id='${tid}' ORDER BY t_time DESC;`;
  } else {
    fetchTicket = `SELECT * FROM ticket WHERE p_id='${id}' ORDER BY t_time DESC;`;
  }

  runQuery(req, res, fetchTicket);
});

const runQuery = (req, res, fetchTicket) => {
  try {
    // Fetching tickets
    con.query(fetchTicket, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres.length > 0) {
        qres.map((i) => {
          let date = new Date(i.t_expires);
          const expires = date.toLocaleString();
          i.t_expires = expires;

          date = new Date(i.t_time);
          const time = date.toLocaleString();
          i.t_time = time;
        });
        success = true;
        res.json({ success, tickets: qres });
      } else {
        success = true;
        console.log(qres);
        res.json({ success, tickets: qres });
      }
    });
  } catch (error) {
    res.json({ error: error.message });
    res.status(500).send("Some error occured");
  }
};

export default router;
