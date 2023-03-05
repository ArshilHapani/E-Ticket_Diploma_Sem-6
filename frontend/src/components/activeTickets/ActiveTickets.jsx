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
import { useState } from "react";
import QrCodeSVG from "../svg_qr/QrCodeSVG";
import { useNavigate } from "react-router-dom";
const currentDate = new Date();
let formattedDate = `${currentDate.getDay()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;
const ActiveTickets = () => {
  const navigate = useNavigate();
  if (
    localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined
  ) {
    navigate("/signUp");
  }
  const { theme } = useStateContext();
  const [qModel, setQModel] = useState(false);
  const [qrProps, setQrProps] = useState(null);
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
  };
  const dummy = [
    {
      startingPoint: "kamrej",
      destination: "majuragate",
      fare: 16,
      validityFrom: "12:05 A.M.",
      validityTo: "2:05 A.M.",
      date: formattedDate,
    },
    {
      startingPoint: "station",
      destination: "spinning mill",
      fare: 8,
      validityFrom: "10:00 A.M.",
      validityTo: "12:05 A.M.",
      date: formattedDate,
    },
    {
      startingPoint: "jakatnaka",
      destination: "katargam",
      fare: 12,
      validityFrom: "10:00 A.M.",
      validityTo: "12:05 A.M.",
      date: formattedDate,
    },
  ];
  return (
    <Container
      className={`ticketsActive__container ${
        theme === "light" ? "light" : "dark"
      }`}
    >
      {dummy.map((item, index) => {
        return (
          <Box
            className={`ticketsActive__content-container ${
              theme === "light" ? "light" : "dark"
            }`}
            key={item.startingPoint + item.fare + index}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="column">
                <Typography>
                  {item.startingPoint} - {item.destination}
                </Typography>
                <Typography>
                  Fare:{" "}
                  <Typography variant="span">{item.fare}&#8377;</Typography>
                </Typography>
                <Typography>
                  validity from:{" "}
                  <Typography variant="span">{item.validityFrom}</Typography>
                </Typography>
                <Typography>
                  validity to:{" "}
                  <Typography variant="span">{item.validityTo}</Typography>
                </Typography>
                <Typography>
                  date: <Typography variant="span">{item.date}</Typography>
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
