import { Router } from "express";
const router = Router();

import changePassenger from "./passenger/changePassenger.js";
import changeImage from "./passenger/changeImage.js";
import fetchPassenger from "./passenger/fetchPassenger.js";
import fetchPayment from "./passenger/fetchPayment.js";
import fetchStations from "./passenger/fetchStations.js";
import fetchFare from "./passenger/fetchFare.js";

router.use("/change", changePassenger);
router.use("/changeImage", changeImage);
router.use("/fetch", fetchPassenger);
router.use("/fetchPayment", fetchPayment);
router.use("/fetchFare", fetchFare);
router.use("/fetchStations", fetchStations);

export default router;