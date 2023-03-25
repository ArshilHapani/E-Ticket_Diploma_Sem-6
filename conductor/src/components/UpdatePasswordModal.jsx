import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useStateContext } from "../context/stateContext";

const defaultModelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 300,
    sm: 350,
    md: 300,
    lg: 360,
  },
  bgcolor: "#f2f2f2",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const UpdatePassword = ({ uname, closingModal }) => {
  const { snackbarSetterFunction, setLoading } = useStateContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [password, setPassword] = useState({ pwd: "", cPwd: "" });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword1 = () => setShowPassword1((show1) => !show1);
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password.pwd === "" || password.cPwd === "") {
      snackbarSetterFunction("Please enter required fields", "error");
      setLoading(false);
      return;
    } else if (password.pwd !== password.cPwd) {
      snackbarSetterFunction(
        "Confirm password does'nt match password",
        "error"
      );
      setLoading(false);
      return;
    } else if (password.cPwd.length < 8 || password.pwd.length < 8) {
      snackbarSetterFunction(
        "The length of the password must be greater than or equal to 8",
        "error"
      );
      setLoading(false);
      return;
    } else {
      const res = await fetch(
        "http://localhost:6565/authentication/changePwd",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uname,
            pwd: password.cPwd,
          }),
        }
      );
      const response = await res.json();
      if (response.success) {
        snackbarSetterFunction("Password updated successfully", "success");
        setLoading(false);
        closingModal(false);
        return;
      } else if (!response.success) {
        snackbarSetterFunction(res.msg, "warning");
        setLoading(false);
        return;
      }
    }
    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack sx={defaultModelStyle} gap={2} direction="column">
        <Typography variant="h5" textAlign="center">
          Create a new password
        </Typography>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            create new password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            value={password.pwd}
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword({ ...password, pwd: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            confirm new password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword1 ? "text" : "password"}
            value={password.cPwd}
            onChange={(e) => setPassword({ ...password, cPwd: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                >
                  {showPassword1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Stack
          justifyContent="flex-end"
          gap={2}
          direction={{ sm: "column", xs: "column", md: "row", lg: "row" }}
        >
          <Button
            variant="outlined"
            color="error"
            onClick={() => closingModal(false)}
          >
            Close
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Update Profile
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default UpdatePassword;
