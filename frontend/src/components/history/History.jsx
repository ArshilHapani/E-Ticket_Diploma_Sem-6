import React from "react";
import "./History.scss";
import { useStateContext } from "../../context/stateContext";
import { Box, Typography } from "@mui/material";
const History = () => {
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
        Recent Tickets
      </Typography>
      {/* <Typography>Looks like you don't have ticket records..</Typography> */}
      <div
        className={`recent-ticket-details ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <h4>
          Starting point : <span>Kamrej</span>
        </h4>
        <h4>
          Destination : <span>Railway Station</span>
        </h4>
        <h4>
          Fare :<span> 12 &#8377;</span>
        </h4>
        <h4>
          Time : <span> 12:05 A.M.</span>
        </h4>
        <h4>
          Date : <span> 1-10-2004</span>
        </h4>
        <h4>
          Ticket ID : <span>qwerf43ert3w</span>
        </h4>
      </div>
      <div
        className={`recent-ticket-details ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <h4>
          Starting point : <span>Kamrej</span>
        </h4>
        <h4>
          Destination : <span>Railway Station</span>
        </h4>
        <h4>
          Fare :<span> 12 &#8377;</span>
        </h4>
        <h4>
          Time : <span> 12:05 A.M.</span>
        </h4>
        <h4>
          Date : <span> 1-10-2004</span>
        </h4>
        <h4>
          Ticket ID : <span>qwerf43ert3w</span>
        </h4>
      </div>
      <div
        className={`recent-ticket-details ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <h4>
          Starting point : <span>Kamrej</span>
        </h4>
        <h4>
          Destination : <span>Railway Station</span>
        </h4>
        <h4>
          Fare :<span> 12 &#8377;</span>
        </h4>
        <h4>
          Time : <span> 12:05 A.M.</span>
        </h4>
        <h4>
          Date : <span> 1-10-2004</span>
        </h4>
        <h4>
          Ticket ID : <span>qwerf43ert3w</span>
        </h4>
      </div>
      <div
        className={`recent-ticket-details ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <h4>
          Starting point : <span>Kamrej</span>
        </h4>
        <h4>
          Destination : <span>Railway Station</span>
        </h4>
        <h4>
          Fare :<span> 12 &#8377;</span>
        </h4>
        <h4>
          Time : <span> 12:05 A.M.</span>
        </h4>
        <h4>
          Date : <span> 1-10-2004</span>
        </h4>
        <h4>
          Ticket ID : <span>qwerf43ert3w</span>
        </h4>
      </div>
      <div
        className={`recent-ticket-details ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <h4>
          Starting point : <span>Kamrej</span>
        </h4>
        <h4>
          Destination : <span>Railway Station</span>
        </h4>
        <h4>
          Fare :<span> 12 &#8377;</span>
        </h4>
        <h4>
          Time : <span> 12:05 A.M.</span>
        </h4>
        <h4>
          Date : <span> 1-10-2004</span>
        </h4>
        <h4>
          Ticket ID : <span>qwerf43ert3w</span>
        </h4>
      </div>
      <div
        className={`recent-ticket-details ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <h4>
          Starting point : <span>Kamrej</span>
        </h4>
        <h4>
          Destination : <span>Railway Station</span>
        </h4>
        <h4>
          Fare :<span> 12 &#8377;</span>
        </h4>
        <h4>
          Time : <span> 12:05 A.M.</span>
        </h4>
        <h4>
          Date : <span> 1-10-2004</span>
        </h4>
        <h4>
          Ticket ID : <span>qwerf43ert3w</span>
        </h4>
      </div>
      <div
        className={`recent-ticket-details ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <h4>
          Starting point : <span>Kamrej</span>
        </h4>
        <h4>
          Destination : <span>Railway Station</span>
        </h4>
        <h4>
          Fare :<span> 12 &#8377;</span>
        </h4>
        <h4>
          Time : <span> 12:05 A.M.</span>
        </h4>
        <h4>
          Date : <span> 1-10-2004</span>
        </h4>
        <h4>
          Ticket ID : <span>qwerf43ert3w</span>
        </h4>
      </div>
    </Box>
  );
};

export default History;
