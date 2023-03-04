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
import { Route, Routes } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { useEffect } from "react";
const Home = () => {
  document.title = "E-Ticket | Home";
  const { setNewUser, theme, setLoader, showSnackBar } = useStateContext();
  // Fetch user data....
  async function fetchUser() {
    const data = await fetch("http://localhost:6565/fetchPassenger", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'authToken': localStorage.getItem("user"),
      },
    });
    const response = await data.json();
    const { passenger, success } = response;
    if (!success) {
      showSnackBar(
        "Something went wrong while fetching user information",
        "warning"
      );
    }
    return passenger;
  }
  useEffect(() => {
    setLoader(true);

    async function fetchPassenger() {
      const data = await fetchUser();
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
        </div>
      </div>
    </>
  );
};

export default Home;
