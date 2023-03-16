/* fetchAllStations.js is used to create an end point for admin to fetch all recent information of stations*/

import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from "../middleware/fetchUser.js";
import checkAdmin from "../middleware/checkAdmin.js";

router.use(fetchuser, checkAdmin);

router.get("/", async (req, res) => {
  let success = false;

  try {
    const fetchTickets = `SELECT * FROM station;`;

    // Fetching tickets
    con.query(fetchTickets, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres.length > 0) {
        success = true;
        res.json({ success, stations: qres });
      } else {
        res.json({ success, msg:"Stations do not exist" });
      }
    });
  } catch (error) {
    res.json({ error: error.message });
    res.status(500).send("Some error occured");
  }
});

export default router;
