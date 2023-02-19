import { Box, Typography } from "@mui/material";
import React from "react";
import { useStateContext } from "../../context/stateContext";
import "./RecentTickets.scss";
const RecentTickets = () => {
  const { theme } = useStateContext();
  const dummy = [
    {
      startingPoint: "kamrej",
      destination: "majuragate",
      fare: 16,
      time: "12:05 A.M.",
      date: "1-10-2004",
    },
    {
      startingPoint: "kamrej",
      destination: "majuragate",
      fare: 16,
      time: "12:05 A.M.",
      date: "1-10-2004",
    },
    {
      startingPoint: "kamrej",
      destination: "majuragate",
      fare: 16,
      time: "12:05 A.M.",
      date: "1-10-2004",
    },
  ];
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
      {/* <Typography>Looks like you don't have ticket records..</Typography> */}
      {dummy.map((item, index) => (
        <div
          className={`recent-ticket-details ${
            theme === "light" ? "light" : "dark"
          }`}
          key={index + item.time}
        >
          <h4>
            Starting point : <span>{item.startingPoint}</span>
          </h4>
          <h4>
            Destination : <span>{item.destination}</span>
          </h4>
          <div className="right">
            <h4>
              Fare :<span> {item.fare} &#8377;</span>
            </h4>
            <h4>
              Time : <span> {item.time}</span>
            </h4>
            <h4>
              Date : <span> {item.date}</span>
            </h4>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default RecentTickets;
