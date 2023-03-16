/* fetchAllPayment.js is used to create an end point for admin to fetch all payments have been done*/

import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from "../middleware/fetchUser.js";
import checkAdmin from "../middleware/checkAdmin.js";

router.use(fetchuser, checkAdmin);

router.get("/", async (req, res) => {
  let success = false;

  try {
    const fetchPayment = `SELECT payment.pay_time, payment.pay_amount, payment.pay_id, passenger.p_uname, conductor.c_uname FROM payment, passenger, conductor WHERE payment.p_id = passenger.p_id && payment.c_id = conductor.c_id;`;

    // Fetching tickets
    con.query(fetchPayment, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres.length > 0) {
        qres.map((i)=>{
            const date = new Date(i.pay_time);
            const paytime = date.toLocaleString();
            i.pay_time = paytime;
        })
        success = true;
        res.json({ success, payments: qres });
      } else {
        res.json({ success, msg:"No payments have been done" });
      }
    });
  } catch (error) {
    res.json({ error: error.message });
    res.status(500).send("Some error occured");
  }
});

export default router;
