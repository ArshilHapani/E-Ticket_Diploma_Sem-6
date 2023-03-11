import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useStateContext } from "../context/stateContext";

const modelTextField = {
  "& .MuiFormLabel-root": {
    color: "#0d1b2a",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#0d1b2a",
  },
  "& .MuiInputBase-root": {
    color: "#0d1b2a",
  },
  "& label.Mui-focused": {
    color: "#0d1b2a",
  },
  "& .MuiAutocomplete-root": {
    margin: "1vh",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "secondary",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#0d1b2a",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#0d1b2a",
  },
  "& .MuiSvgIcon-root": {
    color: "#0d1b2a",
  },
  "& + .MuiAutocomplete-popper": {
    backgroundColor: "#363636",
  },
  "&:hover": {
    borderBottomColor: "#0d1b2a",
  },
  height: "3rem",
};

const AddRechargeQrModel = ({ style }) => {
  const [qrData, setQrData] = useState("");
  const [dataModel, setDataModel] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState(10);
  const { snackbarSetterFunction } = useStateContext();

  const handleScan = async (scanData) => {
    if (scanData && scanData !== "") {
      try {
        setQrData(scanData);
        console.log(scanData);
        const data = JSON.parse(scanData);
        if (data.name === "" || !data.name) {
          snackbarSetterFunction("Invalid QR Code", "error");
          return;
        }
        setQrData(data.name);
        setDataModel(true);
      } catch (error) {
        console.log(error);
        snackbarSetterFunction("Invalid QR Code", "error");
      }
    }
    //stopping the user's cam manually
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((mediaStream) => {
        const stream = mediaStream;
        const tracks = stream.getTracks();
        tracks[0].stop();
      });
  };
  const handleError = (err) => {
    console.error(err);
    return;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("QrData " + qrData);
    console.log("Amount " + rechargeAmount);
    const data = await fetch("http://localhost:6565/recharge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("user").toString(),
      },
      body: JSON.stringify({
        puname: qrData,
        amount: rechargeAmount,
      }),
    });
    const response = await data.json();
    console.log(response);
    if (response.success) {
      snackbarSetterFunction(
        `Balance added to ${qrData} of amount ${rechargeAmount}`,
        "success"
      );
      setDataModel(false);
    } else {
      snackbarSetterFunction(response.msg, "warning");
    }
  };

  return (
    <div>
      {" "}
      <QrReader
        constraints={{
          facingMode: "environment",
        }}
        delay={1500}
        style={{ width: "300px" }}
        onError={handleError}
        onScan={handleScan}
      />
      <Modal open={dataModel}>
        <form onSubmit={handleSubmit}>
          <Stack
            sx={style}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography sx={{ marginBottom: 5 }}>
              add recharge to&nbsp;&nbsp;
              <span style={{ fontSize: 20, fontWeight: 600 }}>{qrData}</span>
            </Typography>
            <TextField
              sx={modelTextField}
              variant="standard"
              type="number"
              label="recharge"
              value={rechargeAmount}
              required
              onChange={(e) => setRechargeAmount(e.target.value)}
            />
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              sx={{ marginTop: 5, width: "12rem" }}
            >
              Add Recharge
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                setDataModel(false);
              }}
              sx={{ marginTop: 3, width: "12rem" }}
            >
              Close
            </Button>
          </Stack>
        </form>
      </Modal>
    </div>
  );
};

export default AddRechargeQrModel;
