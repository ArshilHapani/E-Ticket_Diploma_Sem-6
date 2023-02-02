import React from "react";
import { GenerateTicketButton } from "../../../components";
import "./layout.scss";
import { motion } from "framer-motion";
const Layout = () => {
  return (
    <motion.div className="layout-container light">
      <GenerateTicketButton />
    </motion.div>
  );
};

export default Layout;
