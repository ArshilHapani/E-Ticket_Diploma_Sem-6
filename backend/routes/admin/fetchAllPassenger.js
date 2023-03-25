/* fetchAllPassenger.js is used to create an end point for admin to fetch all passenger available in the system*/

import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from "../middleware/fetchUser.js";
import checkAdmin from "../middleware/checkAdmin.js";

router.use(fetchuser, checkAdmin);

router.get("/", async (req, res) => {
  let success = false;

  try {
    const fetchPassenger = `SELECT * FROM passenger;`;

    // Fetching tickets
    con.query(fetchPassenger, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres.length > 0) {
        qres.map((i)=>{
            const date = new Date(i.p_dob);
            const dob = date.toLocaleString();
            i.p_dob = dob.substring(0, dob.indexOf(","));
        })
        success = true;
        res.json({ success, passengers: qres });
      } else {
        res.json({ success, passengers: qres });
      }
    });
  } catch (error) {
    res.json({ error: error.message });
    res.status(500).send("Some error occured");
  }
});

export default router;