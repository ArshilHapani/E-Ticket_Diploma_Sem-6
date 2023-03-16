import React from "react";
import {
  ActiveTickets,
  GuideMap,
  History,
  Navbar,
  PHistory,
  Profile,
  Settings,
} from "../../components";
import "./Home.scss";
import Layout from "./layout/Layout";
import { useStateContext } from "../../context/stateContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { useEffect } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { AiOutlineSync } from "react-icons/ai";
import useUserFetch from "../../hooks/useUserFetch";
const Home = () => {
  const navigate = useNavigate();
  document.title = "E-Ticket | Home";
  const { setNewUser, theme, setLoader, setToggleSync } = useStateContext();
  const { fetchUser } = useUserFetch();
  // Fetch user data....
  async function fetchUsers() {
    setLoader(true);
    const data = await fetch("http://localhost:6565/passenger/fetch", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("user"),
      },
    });
    const response = await data.json();
    const { passenger } = response;
    setLoader(false);
    return passenger;
  }
  useEffect(() => {
    if (
      localStorage.getItem("user") === null ||
      localStorage.getItem("user") === undefined ||
      localStorage.getItem("user") === ""
    ) {
      navigate("/signUp");
    }
    setLoader(true);

    async function fetchPassenger() {
      const data = await fetchUsers();
      setNewUser(data);
    }
    fetchPassenger();

    setLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Sidebar />
      <div className="home-main-container">
        <div
          className={`layout-wrapper ${theme === "light" ? "light" : "dark"}`}
        >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Layout />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/p_history" element={<PHistory />} />
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route exact path="/setting" element={<Settings />} />
            <Route exact path="/map" element={<GuideMap />} />
            <Route exact path="/tickets" element={<ActiveTickets />} />
          </Routes>
          <Tooltip title="sync" placement="left">
            <IconButton
              size="medium"
              color="primary"
              variant="outlined"
              sx={{
                position: "fixed",
                borderRadius: "50%",
                bottom: "1rem",
                right: "1rem",
                height: "25px",
                width: "25px",
                padding: 0,
              }}
              onClick={() => {
                fetchUser();
                setToggleSync(false);
              }}
            >
              <AiOutlineSync />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Home;
