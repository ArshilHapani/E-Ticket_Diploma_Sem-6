import { Router } from "express";
const router = Router();

import changeConductor from "./conductor/changeConductor.js";
import changeImage from "./conductor/changeImage.js";
import fetchConductor from "./conductor/fetchConductor.js";
import fetchPayment from "./conductor/fetchPayment.js";
import recharge from "./conductor/recharge.js";

router.use("/change", changeConductor);
router.use("/changeImage", changeImage);
router.use("/fetch", fetchConductor);
router.use("/fetchPayment", fetchPayment);
router.use("/recharge", recharge);

export default router;