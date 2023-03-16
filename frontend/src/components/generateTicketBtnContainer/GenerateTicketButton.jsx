import React, { useEffect, useState } from "react";
import "./generateTicketBtn.scss";
import { Box, Button, Card, Modal, Typography } from "@mui/material";
import { FaExchangeAlt } from "react-icons/fa";
import { useStateContext } from "../../context/stateContext";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import QrCodeSVG from "../svg_qr/QrCodeSVG";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "1rem",
  backgroundColor: "#fff",
  boxShadow: 24,
  height: "fit-content",
  width: 300,
  borderRadius: "8px",
  p: 4,
};
const GenerateTicketButton = () => {
  const navigate = useNavigate();
  const { theme, newUser, setBuyTicketModel, toggleSync, setLoader } =
    useStateContext();
  const [activeOneTicket, setActiveOneTicket] = useState([]);
  const [qrModel, setQrModel] = useState(false);

  useEffect(() => {
    fetchActiveTickets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleSync]);

  async function fetchActiveTickets() {
    setLoader(true);
    const ticketsActive = await fetch(
      "http://localhost:6565/ticket/fetchActive",
      {
        method: "GET",
        headers: {
          authToken: localStorage.getItem("user"),
        },
      }
    );
    const response = await ticketsActive.json();
    console.log(response);
    if (response.success) {
      setActiveOneTicket(response.tickets[0]);
      setLoader(false);
    } else if (!response.success) {
      setLoader(false);
      return;
    }
  }

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
            {activeOneTicket.length !== 0 ? (
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
          {activeOneTicket.length !== 0 ? (
            <div className="ticket-details-cont">
              <span>{activeOneTicket?.start_loc}</span>
              <span>{activeOneTicket?.dest_loc}</span>
            </div>
          ) : (
            <div className="empty-ticket-container">
              <span>No current active ticket</span>
            </div>
          )}
        </Card>
        <Stack direction="column" width={{ sm: "100%", xs: "100%" }}>
          <Button
            variant="contained"
            className="mui__btn-buy-ticket"
            color="error"
            onClick={() => setBuyTicketModel(true)}
          >
            Buy ticket
          </Button>
          <Button
            variant="contained"
            className="mui__btn-buy-ticket"
            color="success"
            onClick={() => setQrModel(true)}
          >
            Add Recharge
          </Button>
          {/* Id Qr Model */}
          <Modal
            open={qrModel}
            onClose={() => setQrModel(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <QrCodeSVG values={{ name: newUser.p_uname }} />
                <Typography sx={{ marginTop: "1rem", textAlign: "center" }}>
                  Request any nearby bus <b>conductor</b> to recharge into your
                  account by scanning this QR code{" "}
                </Typography>
              </Stack>
            </Box>
          </Modal>
        </Stack>
      </Box>
    </>
  );
};

export default GenerateTicketButton;
