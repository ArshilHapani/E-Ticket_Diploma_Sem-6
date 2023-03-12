import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { AiOutlineSync } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { Route, Routes, useNavigate } from "react-router-dom";
import BottomNavigationMenu from "../components/BottomNavigationMenu";
import Home from "../components/Home";
import Profile from "../components/Profile";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <BottomNavigationMenu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      <Tooltip title="sync" placement="left">
        <IconButton
          size="medium"
          color="primary"
          variant="outlined"
          sx={{
            position: "fixed",
            borderRadius: "50%",
            left: "1rem",
            top: "1rem",
            height: "25px",
            width: "25px",
            padding: 0,
          }}
          onClick={() => window.location.reload()}
        >
          <AiOutlineSync />
        </IconButton>
      </Tooltip>
      <Tooltip title="log out" placement="left">
        <IconButton
          size="medium"
          color="error"
          variant="outlined"
          sx={{
            position: "fixed",
            borderRadius: "50%",
            top: "1rem",
            right: "1rem",
            height: "25px",
            width: "25px",
            padding: 0,
          }}
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/signIn");
          }}
        >
          <MdLogout />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Layout;
