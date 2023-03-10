/* deleteTicket.js is used to create an end point for passenger to delete purchashed ticket within specified time*/

const express = require("express");
const router = express.Router();
const con = require("../database");
const fetchuser = require("../middleware/fetchUser");
const checkPassenger = require("../middleware/checkPassenger");

router.use(fetchuser, checkPassenger);

router.delete("/",async (req, res) => {
  const { tid } = req.body;
  let success = false;

  try {
    con.beginTransaction();
    const selectBal = `SELECT t_fare FROM ticket WHERE t_id='${tid}';`
    const delTicket = `DELETE FROM ticket WHERE t_id='${tid}' && p_id='${req.user.id}';`;

    con.query(selectBal,(err,qres)=>{
      if(err){
        console.log(err.message);
        res.json({ success });
      }else if(qres.length>0){
        const addBal = `UPDATE passenger SET p_balance = p_balance + ${qres[0].t_fare} WHERE p_id = '${req.user.id}'`;

        con.query(addBal,(err,qres)=>{
          if(err){
            console.log(err.message);
            con.rollback();
            res.json({ success });
          }else if(qres){
            // Deleting ticket from database
            con.query(delTicket, (err, qres) => {
              if (err) {
                console.log(err.message);
                con.rollback();
                res.json({ success });
              } else if (qres) {
                con.commit();
                success = true;
                res.json({ success });
              } else {
                con.rollback();
                res.json({ success });
              }
            });
          }else{
            con.rollback();
            res.json({ success });
          }
        })
      }else{
        con.rollback();
        res.json({ success, msg:"Ticket doesn't exist" });
      }
    })
  } catch (error) {
    res.json({ error: error.message });
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
