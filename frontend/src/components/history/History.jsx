/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./History.scss";
import { useStateContext } from "../../context/stateContext";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchTicketHistory } from "../../functions/fetchTicketHistory";
const History = () => {
  const navigate = useNavigate();
  if (
    localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined ||
    localStorage.getItem("user") === ""
  ) {
    navigate("/signUp");
  }
  document.title = "E-Ticket | Ticket History";
  const { theme, showSnackBar } = useStateContext();
  const [ticketHistory, setTicketHistory] = useState([]);
  useEffect(() => {
    parseTickets();
  }, []);
  async function parseTickets() {
    const tickets = await fetchTicketHistory(showSnackBar);
    console.log(tickets);
    setTicketHistory(tickets);
  }
  return (
    <Box
      className={`ticket-history-container ${
        theme === "light" ? "light" : "dark"
      }`}
    >
      {" "}
      <Typography
        sx={{
          fontSize: 24,
          margin: 1,
        }}
      >
        Ticket History
      </Typography>
      <Typography sx={{ color: "#778da9" }}>
        {ticketHistory.length === 0 &&
          "Looks like you don't have ticket records.."}
      </Typography>
      {ticketHistory.length !== 0 &&
        ticketHistory.map((item, index) => (
          <div
            key={
              item.date +
              item.ticketId +
              index +
              Math.random() * index +
              item.t_id
            }
            className={`recent-ticket-details ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            <h4>
              Starting point : <span>{item.start_loc}</span>
            </h4>
            <h4>
              Destination : <span>{item.dest_loc}</span>
            </h4>
            <h4>
              Fare :<span> {item.t_fare} &#8377;</span>
            </h4>
            <h4>
              Time : <span> {item.t_time}</span>
            </h4>
            <h4>
              Ticket ID : <span>{item.t_id}</span>
            </h4>
          </div>
        ))}
    </Box>
  );
};

export default History;
