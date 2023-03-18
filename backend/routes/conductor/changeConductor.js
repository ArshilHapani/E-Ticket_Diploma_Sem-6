/* changeConductor.js is used to create an end point for conductor and admin 
to change information of conductor that exist into system */

import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from "../middleware/fetchUser.js";  // Middleware used to authenticate user
import checkConductor from '../middleware/checkConductor.js';

router.use(fetchuser, checkConductor);

router.post("/", async (req, res) => {
  const { uname, name, email, no } = req.body;
  let success = false;

  // Checks user with this username exist or not
  const findUser = `SELECT uname FROM login WHERE uname='${uname}' && id!='${req.user.id}';`;
  const setLogin = `UPDATE login SET uname='${uname}' WHERE id='${req.user.id}';`;
  const setConductor = `UPDATE conductor SET c_uname='${uname}', c_name='${name}',${no ? "c_no='" + no + "'," : " "} c_email='${email}' WHERE c_id='${req.user.id}';`;

  try {

    con.query(findUser, (err, qres) => {
      if(err){
        console.log(err.message);
      } else if(qres.length > 0){
        res.json({ success, msg:"A User with this Usename already exist"});
      } else {

        con.beginTransaction();

        // Changing information into conductor table

        con.query(setConductor, (err, qres) => {
          if (err) {
            console.log(err.message);
            res.json({ success });
          } else if (qres.affectedRows > 0) {
            
            // Changing information into login table
            con.query(setLogin, (err, qres) => {
              if (err) {
                console.log(err.message);
                con.rollback();    // Undo changes into database
                res.json({ success });
              } else if (qres.affectedRows > 0) {
                success = true;
                con.commit();    // Saving changes into database
                res.json({ success });
              } else {
                con.rollback();
                res.json({ success, msg:"Conductor does not exist" });
              }
            });
          } else {
            console.log(qres);
            res.json({ success, msg:"Conductor does not exist" });
          }
        });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

export default router;
