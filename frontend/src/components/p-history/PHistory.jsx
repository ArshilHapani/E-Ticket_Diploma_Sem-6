import { Box, Typography } from "@mui/material";
import React from "react";
import "./P_History.scss";
import { useStateContext } from "../../context/stateContext";

const PHistory = () => {
  const { theme } = useStateContext();
  return (
    <Box
      className={`p__history-container ${theme === "light" ? "light" : "dark"}`}
    >
      <Typography
        sx={{
          fontSize: 24,
          margin: 1,
        }}
      >
        Recent Transactions
      </Typography>
      {/* <Typography>Looks like you don't have transaction records..</Typography> */}
      <div
        className={`recent-transaction-details ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <h4>
          Transactions Amount : <span>120 &#8377;</span>
        </h4>
        <h4>
          Transaction Time : <span>3:20 P.M.</span>
        </h4>
        <h4>
          Transaction Date :<span> 12-12-2022</span>
        </h4>
        <h4>
          Transaction ID : <span> dxdfgrt55443</span>
        </h4>
        <h4>
          Transaction By : <span> Baburao Apte</span>
        </h4>
      </div>
    </Box>
  );
};

export default PHistory;
