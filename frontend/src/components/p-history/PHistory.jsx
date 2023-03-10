import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import "./P_History.scss";
import { useStateContext } from "../../context/stateContext";
import { useNavigate } from "react-router-dom";
const PHistory = () => {
  document.title = "E-Ticket | Purchase History";
  const [history, setHistory] = useState([]);
  const { theme } = useStateContext();
  const navigate = useNavigate();
  if (
    localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined ||
    localStorage.getItem("user") === ""
  ) {
    navigate("/signUp");
  }
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
      <Typography>
        {history.length === 0 &&
          "Looks like you don't have transaction records.."}
      </Typography>
      {history.length !== 0 &&
        history.map((item, index) => (
          <div
            key={item.id + index}
            className={`recent-transaction-details ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            <h4>
              Transactions Amount : <span>{item.amount} &#8377;</span>
            </h4>
            <h4>
              Transaction Time : <span>{item.time}</span>
            </h4>
            <h4>
              Transaction Date :<span> {item.date}</span>
            </h4>
            <h4>
              Transaction ID : <span> {item.id}</span>
            </h4>
            <h4>
              Transaction By : <span> {item.transactionBy}</span>
            </h4>
          </div>
        ))}
    </Box>
  );
};

export default PHistory;
