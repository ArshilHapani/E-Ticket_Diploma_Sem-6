/* changeConductor.js is used to create an end point for conductor and admin 
to change information of conductor that exist into system */

const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");  // Middleware used to authenticate user

const con = require("../database");

router.post("/", fetchuser, async (req, res) => {
  const { uname, name, email, no } = req.body;
  let success = false;

  try {

    con.beginTransaction();

    const setLogin = `UPDATE login SET uname='${uname}' WHERE id='${req.user.id}';`;
    const setConductor = `UPDATE conductor SET c_uname='${uname}', c_name='${name}',${no ? "c_no='" + no + "'," : " "} c_email='${email}' WHERE c_id='${req.user.id}';`;

    // Changing information into login table
    con.query(setLogin, (err, qres) => {
      if (err) {
        console.log(err.message);
        res.json({ success });
      } else if (qres) {

        // Changing information into conductor table
        con.query(setConductor, (err, qres) => {
          if (err) {
            console.log(err.message);
            con.rollback();    // Undo changes into database
            res.json({ success });
          } else if (qres) {
            success = true;
            con.commit();    // Saving changes into database
            res.json({ success });
          } else {
            con.rollback();
            res.json({ success });
          }
        });
      } else {
        res.json({ success });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
