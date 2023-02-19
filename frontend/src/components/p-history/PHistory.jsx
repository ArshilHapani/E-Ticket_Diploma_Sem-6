import { Box, Typography } from "@mui/material";
import React from "react";
import "./P_History.scss";
import { useStateContext } from "../../context/stateContext";
const purchaseHistory = [
  {
    amount: 120,
    time: "2:20 P.M.",
    date: "1-10-2004",
    id: "qwwadesfe3",
    transactionBy: "Baburao Apte",
  },
  {
    amount: 120,
    time: "2:20 P.M.",
    date: "1-10-2004",
    id: "qwwadesfe3",
    transactionBy: "Baburao Apte",
  },
];
const PHistory = () => {
  document.title = "E-Ticket | Purchase History";
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
      {purchaseHistory.map((item, index) => (
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
