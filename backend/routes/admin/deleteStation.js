import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from '../middleware/fetchUser.js';
import checkAdmin from "../middleware/checkAdmin.js";

router.use(fetchuser,checkAdmin);

router.delete("/",async (req, res) => {
    const { id } = req.body;
    let success = false;

    const delStation = `DELETE FROM station WHERE st_id='${id}';`;

    try {
        con.query(delStation, (err, qres) => {
          if(err){
            console.log(err.message);
            res.json({ success });
          } else if(qres.affectedRows > 0){
            success = true;
            res.json({ success });
          } else {
            res.json({ success, msg:"Station does not exist"} );
          }
        });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

export default router;
