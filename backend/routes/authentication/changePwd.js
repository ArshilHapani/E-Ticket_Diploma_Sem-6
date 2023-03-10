/* changPwd.js is used to create an end point for user to change their password by verification of pin send by an email */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const con = require("../database"); // Connection object to run query

router.post("/", async (req, res) => {
  const { uname, pwd } = req.body;
  let success = false;

  console.log(uname, pwd )

  try {    
        const findUser = `SELECT * FROM login WHERE uname='${uname}';`;
        
        // Creating salt to perform hash operation on password
        const salt = await bcrypt.genSalt(10);
        // Generating hash value according to pwd and salt
        const secPass = await bcrypt.hash(pwd, salt);
        
        con.query(findUser,(err,qres)=>{
          if(err){
            console.log(err.message);
            res.json({ success })
          } else if(qres.length > 0){

            // Updating password
            const setPwd = `UPDATE login SET pwd='${secPass}' WHERE uname='${uname}'`;
            con.query(setPwd, (err, qres) => {
              if (err) {
                console.log(err.message);
                res.json({ success });
              } else if (qres) {

                success = true;
                res.json({ success, msg:"Password has been changed" });
              } else {
                res.json({ success });
              }
            });
          } else {
            res.json({ success, msg:'User does not exist' });
          }
        });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
