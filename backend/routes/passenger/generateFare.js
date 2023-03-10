/* createTicket.js is used to create an end point for passenger to purchashed ticket and store into database*/

const express = require("express");
const router = express.Router();

// Middlewares used to generate fare
const fetchloc = require("../middleware/fetchLoc");
const findDistance = require("../middleware/findDistance");

router.use(fetchloc, findDistance);

router.post("/", async (req, res) => {
  let success = true;
  let amount = 0;
  try {
    if (req.dist >= 1 && req.dist <= 2) {
      amount = 2;
    } else if (req.dist >= 3 && req.dist <= 4) {
      amount = 4;
    } else if (req.dist >= 5 && req.dist <= 6) {
      amount = 6;
    } else if (req.dist >= 7 && req.dist <= 8) {
      amount = 8;
    } else if (req.dist >= 9 && req.dist <= 10) {
      amount = 10;
    } else if (req.dist >= 11 && req.dist <= 12) {
      amount = 12;
    }

    res.json({ success, amount });
  } catch (error) {
    res.json({ success });
  }
});

module.exports = router;
