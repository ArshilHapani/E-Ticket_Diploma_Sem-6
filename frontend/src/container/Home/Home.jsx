import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components";
import "./Home.scss";
import Layout from "./layout/Layout";
const Home = () => {
  return (
    <motion.div
      className="home-main-container"
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      <Navbar />
      <div className="layout-wrapper light">
        <Layout />
      </div>
    </motion.div>
  );
};

export default Home;
