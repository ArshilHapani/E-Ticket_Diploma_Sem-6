import React from "react";
import "./History.scss";
import { useStateContext } from "../../context/stateContext";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const dummyHistory = [
  {
    startingPoint: "kamrej",
    destination: "majuragate",
    fare: 16,
    time: "12:05 A.M.",
    date: "1-10-2004",
    ticketId: "eret5454",
  },
  {
    startingPoint: "kamrej",
    destination: "majuragate",
    fare: 16,
    time: "12:05 A.M.",
    date: "1-10-2004",
    ticketId: "eret5454",
  },
  {
    startingPoint: "kamrej",
    destination: "majuragate",
    fare: 16,
    time: "12:05 A.M.",
    date: "1-10-2004",
    ticketId: "eret5454",
  },
];
const History = () => {
  const navigate = useNavigate();
  if (
    localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined
  ) {
    navigate("/signUp");
  }
  document.title = "E-Ticket | Ticket History";
  const { theme } = useStateContext();
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
      {/* <Typography>Looks like you don't have ticket records..</Typography> */}
      {dummyHistory.map((item, index) => (
        <div
          key={item.date + item.ticketId + index}
          className={`recent-ticket-details ${
            theme === "light" ? "light" : "dark"
          }`}
        >
          <h4>
            Starting point : <span>{item.startingPoint}</span>
          </h4>
          <h4>
            Destination : <span>{item.destination}</span>
          </h4>
          <h4>
            Fare :<span> {item.fare} &#8377;</span>
          </h4>
          <h4>
            Time : <span> {item.fare}</span>
          </h4>
          <h4>
            Date : <span> {item.date}</span>
          </h4>
          <h4>
            Ticket ID : <span>{item.ticketId}</span>
          </h4>
        </div>
      ))}
    </Box>
  );
};

export default History;
