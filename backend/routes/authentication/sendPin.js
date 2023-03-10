/* sendPin.js is used to create an end point for user to send mail for verification to change the password */

const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const con = require("../database");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'learner164@gmail.com',
    pass: 'pmdbxfrbmwsfpmmt'
  }
});

router.get('/', (req,res)=>{
    const { uname, email} = req.body;
    let success = false;
    const pin = Math.floor((Math.random() * 1000000) + 1);

    const getUser = `SELECT * FROM login WHERE uname='${uname}';`;

    const mailOptions = {
        from: 'learner164@gmail.com',
        to: email,
        subject: 'Your Code',
        text: pin.toString()
      };

      con.query(getUser,(err,qres)=>{
        if(err){
          console.log(err.message);
          res.json({ success });
        } else if(qres.length > 0){

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                res.json({ success });
            } else if(info){
              success = true;
              res.json({ success, pin:pin });
            }
          });
        } else {
          res.json({ success, msg:"User does not exist"})
        }
      });
})

module.exports = router;