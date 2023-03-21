import React, { useState } from "react";
import {
  Stack,
  Typography,
  TextField,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/stateContext";
import logo from "../../assets/logo-no-background.png";
import isUserNameValid from "../../functions/userNameValidate";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { showSnackBar, setLoader } = useStateContext();
  const [textDisable, setTextDisable] = useState(true);
  const [userName, setUserName] = useState("");
  const [otp, setOtp] = useState(0);
  const [initialOtp, setInitialOtp] = useState(0);
  const handleClick = async () => {
    setLoader(true);
    if (userName === "") {
      showSnackBar("please enter your username", "error");
      return;
    }
    if (!isUserNameValid(userName)) {
      showSnackBar("Enter a valid username", "error");
      return;
    }

    showSnackBar("OTP is sent on your email", "success");
    const otps = await fetch("http://localhost:6565/authentication/sendPin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        uname: userName,
      }),
    });
    const response = await otps.json();
    if (response.success) {
      showSnackBar(response.msg, "success");
      setTextDisable(false);
      setOtp(response.pin);
      setLoader(false);
    } else {
      showSnackBar(response.msg, "warning");
      setTextDisable(false);
    }
  };

  const handleOTPClick = () => {
    if (initialOtp === 0) {
      showSnackBar("Please enter OTP", "error");
      return;
    } else {
      //TODO
    }
  };
  return (
    <>
      <div className="form-root">
        <Stack
          sx={{
            width: {
              xs: "70vw",
              md: "45vw",
              lg: "35vw",
            },
            alignContent: "center",
            padding: "30px 1.5rem 0px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
            background: "#fff",
          }}
        >
          <Stack
            sx={{
              padding: "30px",
            }}
          >
            <Typography
              fontSize={{
                xs: 20,
                sm: 18,
                md: 25,
                xl: 30,
              }}
              fontWeight="600"
              sx={{
                color: "Blue",
                padding: "8px",
              }}
              textAlign="center"
            >
              Forgot Password??
            </Typography>
            <Typography
              fontSize={{
                xs: 12,
                sm: 13,
                md: 15,
                xl: 18,
              }}
              fontWeight="500"
              textAlign="center"
            >
              Enter your username address below and we'll send you password
              reset OTP on your email.
            </Typography>
          </Stack>
          <Stack>
            <TextField
              className="textfield"
              label="Enter username"
              variant="standard"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Stack>
          <Stack
            direction="column"
            gap={2}
            sx={{
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            <Button variant="contained" onClick={handleClick}>
              Send Mail
            </Button>
            <TextField
              disabled={textDisable}
              label="Enter OTP"
              type="number"
              variant="standard"
              onChange={(e) => setInitialOtp(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={handleOTPClick}
              disabled={textDisable}
              type="submit"
            >
              Verify OTP
            </Button>
            <Divider />
            <Stack
              sx={{
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
              justifyContent="space-between"
              alignItems="center"
              direction="row"
            >
              <Link
                to="/signIn"
                style={{ textAlign: "center" }}
                className="link-styles-anchor-tags"
              >
                Already have an account?
              </Link>
              <Avatar
                alt="logo"
                src={logo}
                sx={{ height: 60, width: 60, margin: "0.5rem 0" }}
              />
            </Stack>
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default ForgotPassword;
