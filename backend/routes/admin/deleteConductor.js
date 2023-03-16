import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from "../middleware/fetchUser.js";
import checkAdmin from "../middleware/checkAdmin.js";

router.use(fetchuser, checkAdmin);

router.delete("/",async (req, res) => {
  const { uname } = req.body;
  let success = false;
  const delConductor = `DELETE FROM conductor WHERE c_uname='${uname}';`;
  const delLogin = `DELETE FROM login WHERE uname='${uname}'`;

  try {
      con.beginTransaction();
      con.query(delConductor, (err, qres) => {
          if (err) {
            console.log(err.message);
            res.json({ success });
          }else if(qres.affectedRows > 0){
            con.query(delLogin, (err, qres) => {
              if (err) {
                console.log(err.message);
                con.rollback();
                res.json({ success });
              }else if(qres.affectedRows > 0){
                con.commit();
                success = true;
                res.json({ success });
              } else {
                con.rollback();
                res.json({ success });
              }
            });
          }else{
            res.json({ success, msg:"Conductor Does not exist" })
          }
      });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
}
);

export default router;
