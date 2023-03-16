import { Button, Modal, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState, useEffect } from "react";
import {
  MdOutlineAttachMoney,
  MdOutlineHistory,
  MdQrCodeScanner,
} from "react-icons/md";
import QrReader from "react-qr-reader";
import { useStateContext } from "../context/stateContext";
import AddRechargeQrModel from "./AddRechargeQrModel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f2f2f2",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};
const spanStyle = {
  fontSize: 20,
  color: "#8d99ae",
};
const Home = () => {
  document.title = "E-Ticket | Conductor - Scan";
  const { snackbarSetterFunction } = useStateContext();
  const [qrModel, setQrModel] = useState(false);
  const [startScan, setStartScan] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");
  const [rechargeModel, setRechargeModel] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    if (startScan)
      navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  }, [startScan]);

  const handleScan = async (scanData) => {
    if (scanData && scanData !== "") {
      try {
        //converting qr json data int js object
        if (typeof JSON.parse(scanData) === "object") {
          console.log("check");
          setData(JSON.parse(scanData));
        }
        handleOpen();
        console.log(JSON.parse(scanData));
        setStartScan(false);
      } catch (error) {
        console.log(error);
        //if data is string...
        snackbarSetterFunction("Invalid QR Code", "error");
      }
      //stopping the user's cam manually
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((mediaStream) => {
          const stream = mediaStream;
          const tracks = stream.getTracks();
          tracks[0].stop();
        });
    }
  };
  const handleError = (err) => {
    console.error(err);
    return;
  };
  return (
    <Stack
      direction="column"
      gap={3}
      alignItems="center"
      justifyContent="center"
      height="100%"
      sx={{
        backgroundColor: "#f2f2f2",
      }}
    >
      <Button
        sx={{
          width: "20rem",
        }}
        color={startScan ? "error" : "success"}
        variant="contained"
        onClick={() => {
          setQrModel(true);
          setStartScan(true);
        }}
        endIcon={<MdQrCodeScanner />}
      >
        {startScan ? "Stop Scanning" : "Scan ticket"}{" "}
      </Button>
      <Button
        sx={{ width: "20rem" }}
        endIcon={<MdOutlineAttachMoney />}
        variant="contained"
        color="secondary"
        onClick={() => {
          setRechargeModel(true);
        }}
      >
        Add Recharge{" "}
      </Button>
      <Button
        sx={{ width: "20rem" }}
        variant="contained"
        color="primary"
        endIcon={<MdOutlineHistory />}
      >
        Transaction History{" "}
      </Button>
      {startScan && (
        <Modal open={qrModel}>
          <>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={style}
            >
              <QrReader
                constraints={{
                  facingMode: "environment",
                }}
                delay={1500}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "300px" }}
              />
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  setQrModel(false);
                  setStartScan(false);
                }}
                sx={{ marginTop: 5 }}
              >
                Close
              </Button>
            </Stack>
          </>
        </Modal>
      )}
      {data !== "" && (
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {data && (
            <Box sx={style}>
              <Typography>
                <span style={spanStyle}>Source :</span> {data.start_loc}
              </Typography>
              <Typography>
                <span style={spanStyle}>Destination :</span> {data.dest_loc}
              </Typography>
              <Typography>
                <span style={spanStyle}>Fare :</span> {data.t_fare}
              </Typography>
              <Typography>
                <span style={spanStyle}>Purchased at :</span> {data.t_time}
              </Typography>
              <Typography>
                <span style={spanStyle}>Expires at :</span>
                {data.t_expires}
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleClose()}
                sx={{ marginTop: 5 }}
              >
                Close
              </Button>
            </Box>
          )}
        </Modal>
      )}
      {/* Recharge Qr Scan */}
      <Modal open={rechargeModel} onClose={() => setRechargeModel(false)}>
        <Stack
          sx={style}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <AddRechargeQrModel style={style} />
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              setRechargeModel(false);
            }}
            sx={{ marginTop: 5 }}
          >
            Close
          </Button>
        </Stack>
      </Modal>
    </Stack>
  );
};

export default Home;
