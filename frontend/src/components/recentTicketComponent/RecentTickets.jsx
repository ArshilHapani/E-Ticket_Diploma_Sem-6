import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/stateContext";
import "./RecentTickets.scss";
const RecentTickets = () => {
  const navigate = useNavigate();
  if (
    localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined ||
    localStorage.getItem("user") === ""
  ) {
    navigate("/signUp");
  }
  const { theme } = useStateContext();
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetchRecentTickets();
  }, []);

  async function fetchRecentTickets() {
    const response = await fetch("http://localhost:6565/fetchTicket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("user"),
      },
      body: JSON.stringify({
        limit: 3,
      }),
    });
    const tick = await response.json();
    if (tick.success) {
      setTickets(tick.ticket);
    }
  }
  return (
    <Box
      className={`recent-ticket-container ${
        theme === "light" ? "light" : "dark"
      }`}
    >
      <Typography
        sx={{
          fontSize: 24,
        }}
      >
        Recent Tickets
      </Typography>
      <Typography>
        {" "}
        {tickets.length === 0 && "Looks like you don't have ticket records.."}
      </Typography>
      {tickets.length !== 0 &&
        tickets.map((item, index) => (
          <div
            className={`recent-ticket-details ${
              theme === "light" ? "light" : "dark"
            }`}
            key={index + item.time + item.t_id}
          >
            <h4>
              Starting point : <span>{item.start_loc}</span>
            </h4>
            <h4>
              Destination : <span>{item.dest_loc}</span>
            </h4>
            <div className="right">
              <h4>
                Fare :<span> {item.t_fare} &#8377;</span>
              </h4>
              <h4>
                Time : <span> {item.t_time}</span>
              </h4>
            </div>
          </div>
        ))}
    </Box>
  );
};

export default RecentTickets;
