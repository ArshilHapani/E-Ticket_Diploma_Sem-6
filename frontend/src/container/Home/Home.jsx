import React from "react";
import {
  History,
  Map,
  Navbar,
  PHistory,
  Profile,
  Settings,
} from "../../components";
import "./Home.scss";
import Layout from "./layout/Layout";
import { useStateContext } from "../../context/stateContext";
import { Route, Routes } from "react-router-dom";
const Home = () => {
  const { theme } = useStateContext();
  return (
    <div className="home-main-container">
      <div className={`layout-wrapper ${theme === "light" ? "light" : "dark"}`}>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/p_history" element={<PHistory />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/setting" element={<Settings />} />
          <Route exact path="/map" element={<Map />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
