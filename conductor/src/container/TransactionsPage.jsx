/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { useStateContext } from "../context/stateContext";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const { snackbarSetterFunction, setLoading } = useStateContext();
  useEffect(() => {
    fetchTransaction();
  }, []);

  async function fetchTransaction() {
    setLoading(true);
    const data = await fetch("http://localhost:6565/conductor/fetchPayment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("user"),
      },
    });
    const res = await data.json();
    if (res.success) {
      setTransactions(res.payments);
    } else {
      snackbarSetterFunction("No transaction available", "info");
    }
    setLoading(false);
  }
  return (
    <Container>
      <Stack
        sx={{
          padding: "1rem",
        }}
        direction="column"
        alignItems="center"
        gap={4}
      >
        {transactions.length === 0 && (
          <Typography
            sx={{ fontSize: "2rem", marginTop: "2rem" }}
            textAlign="center"
          >
            No payments history recorded
          </Typography>
        )}
        {transactions.length !== 0 &&
          transactions.map((trans, index) => (
            <Stack
              key={trans.pay_id + index + trans.pay_uname}
              direction="column"
              sx={{
                width: "100%",
                background: "#fff",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <Typography>
                payment Time :{" "}
                <span
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    fontStyle: "oblique",
                  }}
                >
                  {trans.pay_time}
                </span>
              </Typography>
              <Typography>
                payment amount :{" "}
                <span
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    fontStyle: "oblique",
                  }}
                >
                  {trans.pay_amount}
                </span>
              </Typography>
              <Typography>
                payment time :{" "}
                <span
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    fontStyle: "oblique",
                  }}
                >
                  {trans.pay_time}
                </span>
              </Typography>
              <Typography>
                payment added to :{" "}
                <span
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    fontStyle: "oblique",
                  }}
                >
                  {trans.p_uname}
                </span>
              </Typography>
            </Stack>
          ))}
      </Stack>
    </Container>
  );
};

export default TransactionsPage;
