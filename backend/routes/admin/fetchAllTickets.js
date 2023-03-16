/* fetchAllTickets.js is used to create an end point for passenger to fetch all recent purchased ticket*/

import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from "../middleware/fetchUser.js";
import checkAdmin from "../middleware/checkAdmin.js";

router.use(fetchuser, checkAdmin);

router.get("/", async (req, res) => {
  let success = false;

  try {
    const fetchTickets = `SELECT ticket.start_loc, ticket.dest_loc, ticket.t_expires, ticket.t_time, ticket.t_fare, passenger.p_uname FROM ticket, passenger WHERE ticket.p_id = passenger.p_id;`;

    // Fetching tickets
    con.query(fetchTickets, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres.length > 0) {
        qres.map((i)=>{
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
        res.json({ success, msg:"Tickets do not exist" });
      }
    });
  } catch (error) {
    res.json({ error: error.message });
    res.status(500).send("Some error occured");
  }
});

export default router;
