/* changePassenger.js is used to create an end point for passenger
to change information of themself into system*/

const express = require("express");
const router = express.Router();
const con = require("../database");
const fetchuser = require("../middleware/fetchUser");

router.use(fetchuser);

router.post("/", async (req, res) => {
  const { uname, name, email, no } = req.body;

  try {
    let success = false;

    con.beginTransaction();

    const setLogin = `UPDATE login SET uname='${uname}' WHERE id='${req.user.id}';`;
    const setPassenger = `UPDATE passenger SET p_uname='${uname}', p_name='${name}',${no ? "p_no='" + no + "'," : " "} p_email='${email}' WHERE p_id='${req.user.id}';`;

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
            console.log(qres);
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
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
