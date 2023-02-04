import React from "react";
import { motion } from "framer-motion";
import {
  History,
  Map,
  Navbar,
  PHistory,
  Profile,
  Theme,
} from "../../components";
import "./Home.scss";
import Layout from "./layout/Layout";
import { useStateContext } from "../../context/stateContext";
import { Route, Routes } from "react-router-dom";
const Home = () => {
  const { theme } = useStateContext();
  return (
    <motion.div
      className="home-main-container"
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      <div className={`layout-wrapper ${theme === "light" ? "light" : "dark"}`}>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/p_history" element={<PHistory />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/themes" element={<Theme />} />
          <Route exact path="/map" element={<Map />} />
        </Routes>
      </div>
    </motion.div>
  );
};

export default Home;
