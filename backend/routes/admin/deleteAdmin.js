import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from "../middleware/fetchUser.js";
import checkAdmin from "../middleware/checkAdmin.js";

router.use(fetchuser, checkAdmin);

router.delete("/",async (req, res) => {
  const { uname } = req.body;
  let success = false;
  const fetchAdmin = `SELECT a_id, created_by FROM admin WHERE a_uname='${uname}';`;
  const delLogin = `DELETE FROM login WHERE uname='${uname}';`;

  try {
    con.query(fetchAdmin,(err,qres)=>{
        if (err) {
            console.log(err.message);
            res.json({ success });
        }else if(qres.length > 0){
            if(qres[0].a_id == qres[0].created_by){
                res.json({ success , msg:"You can't delete this admin"});
            } else {
                con.query(delLogin, (err, qres) => {
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
        }else{
            res.json({ success, msg:"Admin Does not exist" })
        }
    })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
}
);

export default router;
