/* changeImage.js is used to create an end point for conductor
to change profile picture of themself into system*/

import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from "../middleware/fetchUser.js";
import checkConductor from '../middleware/checkConductor.js';

router.use(fetchuser, checkConductor);

router.post("/", async (req, res) => {
  let { image } = req.body;
  let success = false;

  image = `data:image/png;base64,${image}`;

  try {
    if(image){
        const setImg = `UPDATE conductor SET c_img='${image}' WHERE c_id='${req.user.id}';`;
    
        // Changing Picture of Conductor
        con.query(setImg, (err, qres) => {
          if (err) {
            console.log(err.message);
            res.json({ success });
          } else if (qres.affectedRows > 0) {
            success = true;
            res.json({ success })
          } else {
            res.json({ success, msg:"Conductor does not exist" });
          }
        });
    } else {
        res.json({ success })
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

export default router;
