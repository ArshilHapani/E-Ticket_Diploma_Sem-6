import React from "react";
import { Route, Routes } from "react-router-dom";
import BottomNavigationMenu from "../components/BottomNavigationMenu";
import Home from "../components/Home";
import Profile from "../components/Profile";

const Layout = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <BottomNavigationMenu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Layout;
