/* changePassenger.js is used to create an end point for passenger
to change information of themself into system*/

import { Router } from "express";
const router = Router();
import con from "../database.js";
import fetchuser from "../middleware/fetchUser.js";
import checkPassenger from "../middleware/checkPassenger.js";

router.use(fetchuser, checkPassenger);

router.post("/", async (req, res) => {
  const { uname, name, email, no } = req.body;
  let success = false;

  const findUser = `SELECT uname FROM login WHERE uname='${uname}' && id!='${req.user.id}'`;
  const setLogin = `UPDATE login SET uname='${uname}' WHERE id='${req.user.id}';`;
  const setPassenger = `UPDATE passenger SET p_uname='${uname}', p_name='${name}',${no ? "p_no='" + no + "'," : " "} p_email='${email}' WHERE p_id='${req.user.id}';`;

  try {

    con.query(findUser, (err, qres) => {
      if(err){
        console.log(err.message);
      } else if(qres.length > 0){
        res.json({ success, msg:"A User with this Usename already exist"});
      } else {
        con.beginTransaction();

        //  Changing information of passenger
        con.query(setPassenger, (err, qres) => {
          if (err) {
            console.log(err.message);
            res.json({ success });
          } else if (qres.affectedRows > 0) {

            // Changing login related information of passenger
            con.query(setLogin, (err, qres) => {
              if (err) {
                console.log(err.message);
                con.rollback(); // Undo changes into database
                res.json({ success });
              } else if (qres.affectedRows > 0) {
                success = true;
                con.commit(); // Saving changes into database
                res.json({ success });
              } else {
                con.rollback();
                res.json({ success, msg:"Passenger does not exist" });
              }
            });
          } else {
            res.json({ success, msg:"Passenger does not exist" });
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
