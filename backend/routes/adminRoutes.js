import { Router } from "express";
const router = Router();

import addStation from "./admin/addStation.js";
import deleteStation from "./admin/deleteStation.js";
import createAdmin from "./admin/createAdmin.js";
import createConductor from "./admin/createConductor.js";
import deleteConductor from "./admin/deleteConductor.js";
import fetchAllPassenger from "./admin/fetchAllPassenger.js";
import fetchAllConductor from "./admin/fetchAllConductor.js";
import fetchAllPayment from "./admin/fetchAllPayment.js";
import fetchAllTickets from "./admin/fetchAllTickets.js";
import fetchAllStations from "./admin/fetchAllStations.js";
import fetchPassenger from "./passenger/fetchPassenger.js";
import fetchPaymentP from "./passenger/fetchPayment.js";
import fetchConductor from "./conductor/fetchConductor.js";
import fetchPaymentC from "./conductor/fetchPayment.js";
import fetchTicket from "./ticket/fetchTicket.js";

router.use('/addStation', addStation);
router.use('/deleteStation', deleteStation);
router.use('/createAdmin', createAdmin);
router.use('/createConductor', createConductor);
router.use('/deleteConductor', deleteConductor);
router.use("/fetchAllPassenger", fetchAllPassenger);
router.use("/fetchAllConductor", fetchAllConductor);
router.use("/fetchAllPayment", fetchAllPayment);
router.use("/fetchAllTickets", fetchAllTickets);
router.use("/fetchAllStations", fetchAllStations);
router.use("/passenger", fetchPassenger);
router.use("/passenger", fetchPaymentP);
router.use("/conductor", fetchConductor);
router.use("/conductor", fetchPaymentC);
router.use("/passenger", fetchTicket);


export default router;