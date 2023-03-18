import { Router } from "express";
const router = Router();
import bcrypt from "bcryptjs";
import con from "../database.js";
import fetchuser from "../middleware/fetchUser.js";
import checkAdmin from "../middleware/checkAdmin.js";

router.use(fetchuser, checkAdmin);

router.post("/",async (req, res) => {
  const { uname, pwd, name, email, no, dob } = req.body;
  let success = false;

  const d = new Date();
  const id = 'A' + ('0' + d.getFullYear()).slice(3) + ('0' + d.getMonth()).slice(-2) + ('0' + d.getDate()).slice(-2) + ('0' + d.getHours()).slice(-2) + ('0' + d.getMinutes()).slice(-2) + ('0' + d.getSeconds()).slice(-2) + ('0' + d.getMilliseconds()).slice(-2);

  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(pwd, salt);

  // Checks user with this username exist or not
  const findUser = `SELECT a_uname FROM admin WHERE a_uname='${uname}'`;
  const inLogin = `INSERT INTO login VALUES ('${id}','${uname}','${secPass}')`;
  const inConductor = `INSERT INTO admin VALUES ('${id}','${uname}','${req.user.id}','${name}','${email}',${no?no:null},'${dob}',NULL)`;
  
  try {
      con.query(findUser, (err, qres) => {
        if(err){
          console.log(err.message);
        } else if(qres.length > 0){
          res.json({ success, msg:"A User with this Usename already exist"});
        } else {
          con.beginTransaction();

          con.query(inLogin, (err, qres) => {
            if (err) {
              console.log(err.message);
              res.json({ success });
            }else if(qres.affectedRows > 0){
              con.query(inConductor, (err, qres) => {
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
