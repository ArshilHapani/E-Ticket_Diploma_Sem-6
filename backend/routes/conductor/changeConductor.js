/* changeConductor.js is used to create an end point for conductor and admin 
to change information of conductor that exist into system */

const express = require("express");
const router = express.Router();
const con = require("../database");
const fetchuser = require("../middleware/fetchUser");  // Middleware used to authenticate user

router.use(fetchuser);

router.post("/", async (req, res) => {
  const { uname, name, email, no } = req.body;
  let success = false;

  try {

    con.beginTransaction();
    console.log(req.user.id);
    const setLogin = `UPDATE login SET uname='${uname}' WHERE id='${req.user.id}';`;
    const setConductor = `UPDATE conductor SET c_uname='${uname}', c_name='${name}',${no ? "c_no='" + no + "'," : " "} c_email='${email}' WHERE c_id='${req.user.id}';`;

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
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
