import React, { useState } from "react";
import {
  Stack,
  Typography,
  TextField,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useStateContext } from "../context/stateContext";

const OldUser = () => {
  const navigate = useNavigate();
  const { snackbarSetterFunction, setLoading } = useStateContext();
  const [user, setUser] = useState({
    cid: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.username === "" || user.password === "") {
      snackbarSetterFunction("please enter required fields", "error");
      return;
    }
    if (user.password.length < 8) {
      snackbarSetterFunction(
        "The length of the password must be greater than or equal to 8",
        "error"
      );
      return;
    }
    setLoading(true);
    const data = await fetch("http://localhost:6565/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const response = await data.json();
    console.log(response);
    if (response.success) {
      snackbarSetterFunction("Login Success", "success");
      localStorage.setItem("user", response.authToken);
      navigate("/");
      setLoading(false);
    } else {
      snackbarSetterFunction(response.msg, "error");
      setLoading(false);
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-root">
      <Stack
        sx={{
          width: {
            xs: "70vw",
            md: "40vw",
            lg: "30vw",
          },
          alignItems: "center",
          padding: "30px 1rem",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack direction="column" gap={2}>
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
                Hi, Welcome
              </Typography>
              <Typography fontSize={15} fontWeight="500" textAlign="center">
                Enter your credential to continue
              </Typography>
            </Stack>
            <Stack gap={1}>
              <TextField
                className="textfield"
                label="Conductor ID"
                variant="standard"
                onChange={(e) => {
                  setUser({
                    ...user,
                    cid: e.target.value,
                  });
                }}
              />
              <FormControl sx={{ width: "100%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      password: e.target.value,
                    });
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Stack>
            <Stack
              direction="column"
              gap={2}
              sx={{
                paddingTop: "20px",
                paddingBottom: "15px",
              }}
            >
              <Link
                to="/forgetPassword"
                className="link-styles-anchor-tags"
                underline="none"
                align="right"
              >
                <Typography> Forgot Password?</Typography>
              </Link>
              <Button variant="contained" type="submit">
                Sign In
              </Button>
            </Stack>
            <Divider />
            <Stack
              sx={{
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
            ></Stack>
          </Stack>
        </form>
      </Stack>
    </div>
  );
};

export default OldUser;
