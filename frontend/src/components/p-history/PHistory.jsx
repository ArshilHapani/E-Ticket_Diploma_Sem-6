import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./P_History.scss";
import { useStateContext } from "../../context/stateContext";
import { useNavigate } from "react-router-dom";
const PHistory = () => {
  document.title = "E-Ticket | Purchase History";
  const [history, setHistory] = useState([]);
  const { theme, toggleSync, setLoader } = useStateContext();
  const navigate = useNavigate();
  if (
    localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined ||
    localStorage.getItem("user") === ""
  ) {
    navigate("/signUp");
  }
  useEffect(() => {
    fetchTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleSync]);

  async function fetchTransaction() {
    setLoader(true);
    const transaction = await fetch(
      "http://localhost:6565/passenger/fetchPayment",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authToken: localStorage.getItem("user"),
        },
      }
    );
    const response = await transaction.json();
    console.log(response);
    setHistory(response.payments);
    setLoader(false);
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
        {history?.length === 0 &&
          "Looks like you don't have transaction records.."}
      </Typography>
      {history?.length !== 0 &&
        history.map((item, index) => (
          <div
            key={item.pay_id + item.c_id + index}
            className={`recent-transaction-details ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            <h4>
              Transactions Amount : <span>{item.pay_amount} &#8377;</span>
            </h4>
            <h4>
              Transaction Time : <span>{item.pay_time}</span>
            </h4>
            <h4>
              Transaction ID : <span> {item.pay_id}</span>
            </h4>
            <h4>
              Transaction By : <span> {item.c_uname}</span>
            </h4>
          </div>
        ))}
    </Box>
  );
};

export default PHistory;
