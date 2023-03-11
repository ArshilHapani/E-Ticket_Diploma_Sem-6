/* changeImage.js is used to create an end point for conductor
to change profile picture of themself into system*/

const express = require("express");
const router = express.Router();
const con = require("../database");
const fetchuser = require("../middleware/fetchUser");

router.use(fetchuser);

router.post("/", async (req, res) => {
  let { image } = req.body;

  try {
    let success = false;
    image = `data:image/png;base64,${image}`;
    if (image) {
      const setImg = `UPDATE conductor SET c_img='${image}' WHERE c_id='${req.user.id}';`;

      // Changing Picture of Conductor
      con.query(setImg, (err, qres) => {
        if (err) {
          console.log(err.message);
          res.json({ success });
        } else if (qres.length > 0) {
          success = true;
          res.json({ success });
        } else {
          res.json({ success });
        }
      });
    } else {
      res.json({ success });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
