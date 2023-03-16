/* fetchPassenger.js is used to create an end point for passenger
to send their data and show them in UI after they are logged into the system*/

import { Router } from "express";
const router = Router();
import con from "../database.js";
import checkAdmin from "../middleware/checkAdmin.js";
import fetchuser from "../middleware/fetchUser.js";

router.use(fetchuser);

let success = false;

router.get("/", (req, res) => {
  const fetchPassenger = `SELECT *,(SELECT COUNT(*) FROM ticket WHERE p_id='${req.user.id}') as no_ticket FROM passenger WHERE p_id='${req.user.id}';`;
  runQuery(req,res,fetchPassenger);
});

router.post("/fetch", checkAdmin, (req, res) => {
  const { id } = req.body;

  const fetchPassenger = `SELECT *,(SELECT COUNT(*) FROM ticket WHERE p_id='${id}') as no_ticket FROM passenger WHERE p_id='${id}';`;

  runQuery(req,res,fetchPassenger);
});

const runQuery = (req,res,fetchPassenger) =>{
  try {
    
    // Get the data of passenger
    con.query(fetchPassenger, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres.length > 0) {
        const date = new Date(qres[0].p_dob);
        const dob = date.toLocaleString();
        qres[0].p_dob = dob.substring(0, dob.indexOf(","));
        success = true;
        res.json({ success, "passenger": qres[0] });
      } else {
        res.json({ success, msg:"Passenger does not exist"  });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
}

export default router;