import React, { useState } from "react";
import { Stack, Typography, TextField, Button, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/stateContext";
import validateEmail from "../../functions/validateEmail";
import { generateSess } from "../../functions/generateSessionId";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { showSnackBar } = useStateContext();
  const [textDisable, setTextDisable] = useState({
    textField: true,
    button: true,
  });
  const [email, setEmail] = useState("");
  const [localOtp, setLocalOtp] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();

    if (email === "") {
      showSnackBar("please enter your email", "error");
      return;
    }
    if (validateEmail(email) === null) {
      showSnackBar("please enter valid email format", "error");
      return;
    }

    showSnackBar("OTP is sent on your email", "success");
    setTextDisable({ textField: false });
  };
  const verifyOTP = () => {
    if (localOtp !== 0) {
      setTextDisable({ button: false });
      showSnackBar(
        "Welcome to E-Ticket Enter your credentials to continue",
        "success"
      );
      sessionStorage.setItem("sessionId", generateSess());
      navigate("/signUp");
    } else {
      showSnackBar("Please enter OTP", "error");
      return;
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
              Get Started
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
              Enter your email to continue
            </Typography>
          </Stack>
          <Stack>
            <TextField
              className="textfield"
              label="Email Address"
              type="email"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
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
              disabled={textDisable.textField}
              label="Enter OTP"
              type="number"
              variant="standard"
              onChange={(e) => setLocalOtp(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={verifyOTP}
              disabled={textDisable.button}
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
            >
              <Link
                to="/signIn"
                style={{ textAlign: "right" }}
                className="link-styles-anchor-tags"
              >
                Already have an account?
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default ForgotPassword;
