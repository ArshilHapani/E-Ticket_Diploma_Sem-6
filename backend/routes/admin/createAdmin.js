import { Router } from "express";
const router = Router();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import con from "../database.js";
// const checkAdmin = require("../middleware/checkAdmin");

const SECRET_MSG = "E-TICKET";

// router.use(checkAdmin);

router.post("/",async (req, res) => {
  const { uname, pwd, name, email, no, dob } = req.body;
  let success = false;

  const d = new Date();
  const id = 'A' + ('0' + d.getFullYear()).slice(3) + ('0' + d.getMonth()).slice(-2) + ('0' + d.getDate()).slice(-2) + ('0' + d.getHours()).slice(-2) + ('0' + d.getMinutes()).slice(-2) + ('0' + d.getSeconds()).slice(-2) + ('0' + d.getMilliseconds()).slice(-2);

  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(pwd, salt);

  // Checks user with this username exist or not
  const findUser = `SELECT uname FROM login WHERE uname='${uname}'`;
  const inLogin = `INSERT INTO login VALUES ('${id}','${uname}','${secPass}')`;
  const inConductor = `INSERT INTO admin VALUES ('${uname}','${id}','${id}','${name}','${email}',${no?no:null},'${dob}',NULL)`;
  
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
                  const data = {
                    id: id,
                  };
                  const authToken = jwt.sign(data, SECRET_MSG);
                  success = true;
                  res.json({ success, authToken });
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
