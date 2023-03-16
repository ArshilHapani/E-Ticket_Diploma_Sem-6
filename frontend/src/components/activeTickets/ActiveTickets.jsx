/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Container,
  Grow,
  Modal,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useStateContext } from "../../context/stateContext";
import "./activeTickets.scss";
import { useEffect, useState } from "react";
import QrCodeSVG from "../svg_qr/QrCodeSVG";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "1rem",
  backgroundColor: "#fff",
  boxShadow: 24,
  height: "fit-content",
  width: "fit-content",
  p: 4,
  borderRadius: "8px",
};
const ActiveTickets = () => {
  const navigate = useNavigate();
  if (
    localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined ||
    localStorage.getItem("user") === ""
  ) {
    navigate("/signUp");
  }
  const { theme, toggleSync, setLoader } = useStateContext();
  const [qModel, setQModel] = useState(false);
  const [qrProps, setQrProps] = useState(null);
  const [activeTickets, setActiveTickets] = useState([]);
  useEffect(() => {
    fetchActiveTickets();
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
      setActiveTickets(response.tickets);
      setLoader(false);
    } else if (!response.success) {
      setLoader(false);
      return;
    }
  }
  return (
    <Container
      className={`ticketsActive__container ${
        theme === "light" ? "light" : "dark"
      }`}
    >
      <Typography sx={{ fontSize: "1rem", textAlign: "center", mt: 2 }}>
        {" "}
        {activeTickets.length === 0 &&
          "Looks like you don't have any active tickets.."}
      </Typography>
      {activeTickets.length !== 0 &&
        activeTickets.map((item, index) => {
          return (
            <Box
              className={`ticketsActive__content-container ${
                theme === "light" ? "light" : "dark"
              }`}
              key={item.p_id + item.t_id + index}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="column">
                  <Typography>
                    {item.start_loc} - {item.dest_loc}
                  </Typography>
                  <Typography>
                    Fare:{" "}
                    <Typography variant="span">{item.t_fare}&#8377;</Typography>
                  </Typography>
                  <Typography>
                    Purchased at:{" "}
                    <Typography variant="span">{item.t_time}</Typography>
                  </Typography>
                  <Typography>
                    Expires at:{" "}
                    <Typography variant="span">{item.t_expires}</Typography>
                  </Typography>
                </Stack>
                <Tooltip
                  title="view QR code"
                  placement="left"
                  arrow
                  TransitionComponent={Grow}
                >
                  <Button
                    variant="text"
                    onClick={() => {
                      setQModel(true);
                      setQrProps(item);
                    }}
                    sx={{ margin: "1rem 0" }}
                  >
                    QR Code
                  </Button>
                </Tooltip>
                <Modal
                  open={qModel}
                  onClose={() => setQModel(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <QrCodeSVG values={qrProps} />
                    </Stack>
                  </Box>
                </Modal>
              </Stack>
            </Box>
          );
        })}
    </Container>
  );
};

export default ActiveTickets;
