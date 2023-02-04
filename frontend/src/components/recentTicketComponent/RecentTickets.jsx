import { Box } from "@mui/material";
import React from "react";
import { useStateContext } from "../../context/stateContext";
import "./RecentTickets.scss";
const RecentTickets = () => {
  const { theme } = useStateContext();
  return (
    <Box
      className={`recent-ticket-container ${
        theme === "light" ? "light" : "dark"
      }`}
    >
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
          Fare : <span> 12 &#8377;</span>
        </h4>
        <h4>
          Time : <span> 12:05 A.M.</span>
        </h4>
      </div>
    </Box>
  );
};

export default RecentTickets;
