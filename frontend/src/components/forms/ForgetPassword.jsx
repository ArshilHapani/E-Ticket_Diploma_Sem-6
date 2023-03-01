import React from "react";
import { Stack, Typography, TextField, Button, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/"); //Navigate to new password
  }
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
            padding: "30px 1.5rem",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
            background: "#fff",
          }}
        >
          <form>
            <Stack
              sx={{
                padding: "30px",
              }}
            >
              <Typography
                fontSize={25}
                fontWeight="600"
                sx={{
                  color: "Blue",
                  padding: "8px",
                }}
                textAlign="center"
              >
                Forgot Password??
              </Typography>
              <Typography fontSize={15} fontWeight="500" textAlign="center">
                Enter your email address below and we'll send you password reset
                OTP.
              </Typography>
            </Stack>
            <Stack>
              <TextField
                className="textfield"
                label="Email Address"
                variant="standard"
              ></TextField>
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
            </Stack>
            <Divider />
            <Stack
              sx={{
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
            >
              <Link to="/" underline="none">
                Already have an account?
              </Link>
            </Stack>
          </form>
        </Stack>
      </div>
    </>
  );
};

export default ForgotPassword;
