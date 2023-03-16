import { Router } from "express";
const router = Router();

import createTicket from "./ticket/createTicket.js";
import fetchTicket from "./ticket/fetchTicket.js";
import cancelTicket from "./ticket/cancelTicket.js";
import fetchActiveTicket from "./ticket/fetchActiveTicket.js";

router.use("/create", createTicket);
router.use("/fetch", fetchTicket);
router.use("/fetchActive", fetchActiveTicket);
router.use("/cancel", cancelTicket);

export default router;