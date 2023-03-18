/* sendPin.js is used to create an end point for user to send mail for verification to change the password */

import { Router } from "express";
const router = Router();
import { createTransport } from 'nodemailer';
import con from "../database.js";

const transporter = createTransport({
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
});

export default router;