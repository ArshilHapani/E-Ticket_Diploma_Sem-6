import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components";
import "./Home.scss";
const Home = () => {
  return (
    <motion.div className="home-main-container">
      <Navbar />
      <h1>Home</h1>
    </motion.div>
  );
};

export default Home;
