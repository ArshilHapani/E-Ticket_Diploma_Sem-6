import React from "react";
import "./generateTicketBtn.scss";
import { Box, Button, Card } from "@mui/material";
import { FaExchangeAlt } from "react-icons/fa";
import { useStateContext } from "../../context/stateContext";
const GenerateTicketButton = () => {
  const { homeTicketDetails, theme, setTheme } = useStateContext();
  return (
    <>
      <Box
        className={`generate-ticket-btn-container ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <Card
          variant="outlined"
          className={`current-active-ticket-container ${
            theme === "light" ? "light" : "dark"
          }`}
        >
          <h3>
            Currently activated ticket
            {homeTicketDetails ? (
              <span className="green-dot"></span>
            ) : (
              <span className="red-dot"></span>
            )}
          </h3>
          <div className="ticket-macro-container">
            <span>From</span>
            <span>
              <FaExchangeAlt />
              <span className="dot-green"></span>
            </span>
            <span>To</span>
          </div>
          {homeTicketDetails ? (
            <div className="ticket-details-cont">
              <span>Kamrej surat</span>
              <span>Railway station</span>
            </div>
          ) : (
            <div className="empty-ticket-container">
              <span>No current active ticket</span>
            </div>
          )}
        </Card>
        <Button
          variant="contained"
          className="mui__btn-buy-ticket"
          color="error"
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          Buy ticket
        </Button>
      </Box>
    </>
  );
};

export default GenerateTicketButton;
