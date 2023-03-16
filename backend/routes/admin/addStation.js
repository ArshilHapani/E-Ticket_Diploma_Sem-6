import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from '../middleware/fetchUser.js';
import checkAdmin from "../middleware/checkAdmin.js";

router.use(fetchuser,checkAdmin);

router.put("/",async (req, res) => {
    const { id, stname, lat, long } = req.body;
    let success = false;

    const findStation = `SELECT * FROM station WHERE st_id=${id} || st_name='${stname}' || st_lat=${lat} || st_long=${long}`;
    const inStation = `INSERT INTO station VALUES (${id},'${stname}',${lat},${long});`;

    try {
        con.query(findStation, (err, qres) => {
          if(err){
            console.log(err.message);
            res.json({ success });
          } else if(qres.length > 0){
            res.json({ success, msg:"Station already exist"});
          } else {
            con.query(inStation, (err, qres) => {
              if (err) {
                console.log(err.message);
                res.json({ success });
              }else if(qres.affectedRows > 0){
                success = true;
                res.json({ success });
              }else{
                res.json({ success })
              }
            });
          }
        });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

export default router;
