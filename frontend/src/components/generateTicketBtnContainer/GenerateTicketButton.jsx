import React, { useState } from "react";
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
  const { homeTicketDetails, theme, setBuyTicketModel, newUser } =
    useStateContext();
  const [qrModel, setQrModel] = useState(false);

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
