import React from "react";
import { GenerateTicketButton, RecentTickets } from "../../../components";
import "./layout.scss";
import { motion } from "framer-motion";
import { useStateContext } from "../../../context/stateContext";
const Layout = () => {
  const { theme } = useStateContext();
  return (
    <>
      <motion.div
        className={`layout-container ${theme === "light" ? "light" : "dark"}`}
      >
        <GenerateTicketButton />
        <RecentTickets />
      </motion.div>
    </>
  );
};

export default Layout;
