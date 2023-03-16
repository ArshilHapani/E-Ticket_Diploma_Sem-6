import {
  Box,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { BsSun } from "react-icons/bs";

import { useStateContext } from "../../context/stateContext";
import useMuiStyles from "../../hooks/useMuiStyles";

import "./Settings.scss";
const Settings = () => {
  const navigate = useNavigate();
  if (
    localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined ||
    localStorage.getItem("user") === ""
  ) {
    navigate("/signUp");
  }
  document.title = "E-Ticket | Settings";
  const { theme, setTheme } = useStateContext();
  const [alignment, setAlignment] = React.useState(
    localStorage.getItem("theme") !== null || undefined
      ? localStorage.getItem("theme")
      : "light"
  );
  const { textTheme } = useMuiStyles();

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setTheme(newAlignment);
    }
    if (newAlignment === "system") {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  };

  return (
    <Box
      className={`settings__container ${theme === "light" ? "light" : "dark"}`}
    >
      <Container>
        <Typography
          sx={{
            fontSize: 30,
            marginBottom: "1rem",
          }}
        >
          Theme
        </Typography>

        {/* Toggle Buttons */}
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton sx={textTheme} value="dark">
            <CiDark fontSize={20} />{" "}
            <Typography sx={{ marginLeft: 1 }}>Dark</Typography>
          </ToggleButton>
          <ToggleButton sx={textTheme} value="system">
            <WiMoonAltFirstQuarter fontSize={20} />{" "}
            <Typography sx={{ marginLeft: 1 }}>System</Typography>
          </ToggleButton>
          <ToggleButton sx={textTheme} value="light">
            <BsSun fontSize={20} />{" "}
            <Typography sx={{ marginLeft: 1 }}>Light</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
        {/* <Typography
          sx={{
            fontSize: 15,
            margin: "1rem 0",
          }}
        >
          Report a bug
        </Typography> */}
        {/* //TODO make report a bug page */}
      </Container>
    </Box>
  );
};

export default Settings;
