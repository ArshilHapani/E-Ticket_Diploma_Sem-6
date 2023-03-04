/* changeImage.js is used to create an end point for conductor
to change profile picture of themself into system*/

const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

const con = require("../database");

router.post("/c", fetchuser, async (req, res) => {
  const { image } = req.body;

  try {
    let success = false;

    if(image){
        const setImg = `UPDATE conductor SET c_img='${image}' WHERE c_id='${req.user.id}';`;
    
        // Changing Picture of Conductor
        con.query(setImg, (err, qres) => {
          if (err) {
            console.log(err.message);
            res.json({ success });
          } else if (qres) {
            success = true;
            res.json({ success })
          } else {
            res.json({ success });
          }
        });
    } else {
        res.json({ success })
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
