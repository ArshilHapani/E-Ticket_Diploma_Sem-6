import React from "react";
import "./generateTicketBtn.scss";
import { Box, Button, Card } from "@mui/material";
import { FaExchangeAlt } from "react-icons/fa";
import { useStateContext } from "../../context/stateContext";
import { useNavigate } from "react-router-dom";

const GenerateTicketButton = () => {
  const navigate = useNavigate();
  const { homeTicketDetails, theme, setBuyTicketModel } = useStateContext();

  return (
    <>
      <Box
        className={`generate-ticket-btn-container ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <Card
          onClick={() => navigate("/tickets")}
          variant="elevation"
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
          onClick={() => setBuyTicketModel(true)}
        >
          Buy ticket
        </Button>
      </Box>
    </>
  );
};

export default GenerateTicketButton;
