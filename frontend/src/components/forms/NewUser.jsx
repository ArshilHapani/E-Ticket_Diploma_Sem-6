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
import { useStateContext } from "../../context/stateContext";

const NewUser = () => {
  const navigate = useNavigate();
  const { showSnackBar } = useStateContext();
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    userName: "",
    password: "",
    mobile: "",
    dob: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    if (
      user.fName === "" ||
      user.lName === "" ||
      user.dob === "" ||
      user.email === "" ||
      user.password === "" ||
      user.userName === ""
    ) {
      showSnackBar("Please enter all required fields", "error");
      return;
    }
    // if (user.mobile.length !== 10) {
    //   showSnackBar("Please enter valid length of mobile number", "error");
    //   return;
    // }
    localStorage.setItem("user", JSON.stringify(user));
    showSnackBar("Successfully created a new account", "success");
    navigate("/");
  }
  const [showPassword, setShowPassword] = useState(false);

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
            md: "45vw",
            lg: "35vw",
          },
          alignContent: "center",
          padding: "30px 1.5rem",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          background: "#fff",
        }}
      >
        <form onSubmit={handleSubmit}>
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
              Sign Up
            </Typography>
            <Typography fontSize={15} fontWeight="500" textAlign="center">
              Enter your credential to continue
            </Typography>
          </Stack>
          <Divider />
          <Stack gap={1} direction="column">
            <Stack direction="row" gap={1} width="100%">
              <TextField
                sx={{ width: "50%" }}
                label="First Name"
                variant="standard"
                value={user.fName}
                onChange={(e) => {
                  setUser({
                    ...user,
                    fName: e.target.value,
                  });
                }}
              />
              <TextField
                sx={{ width: "50%" }}
                label="Last Name"
                variant="standard"
                onChange={(e) => {
                  setUser({
                    ...user,
                    lName: e.target.value,
                  });
                }}
              />
            </Stack>
            <TextField
              label="Create Username"
              variant="standard"
              onChange={(e) => {
                setUser({
                  ...user,
                  userName: e.target.value,
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
            <TextField
              label="email"
              variant="standard"
              type="email"
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
            />
            <TextField
              label="mobile number"
              variant="standard"
              type="text"
              onChange={(e) => {
                setUser({
                  ...user,
                  mobile: e.target.value,
                });
              }}
            />
            <TextField
              label="Date of Birth"
              type="date"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setUser({
                  ...user,
                  dob: e.target.value,
                });
              }}
            />

            <Stack
              sx={{
                paddingTop: "50px",
                paddingBottom: "15px",
              }}
            >
              <Button variant="contained" type="submit">
                Sign Up
              </Button>
            </Stack>
            <Divider />
            <Stack
              sx={{
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
            >
              <Link to="/signIn" underline="none">
                Already have an account?
              </Link>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </div>
  );
};

export default NewUser;
