import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useStateContext } from "../../context/stateContext";
import "./Settings.scss";
const Settings = () => {
  document.title = "E-Ticket | Settings";
  const { theme, setTheme } = useStateContext();
  return (
    <Box
      className={`settings__container ${theme === "light" ? "light" : "dark"}`}
    >
      <Typography
        sx={{
          fontSize: 30,
        }}
      >
        Theme
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={`${theme === "light" ? "light" : "dark"}`}
          name="radio-buttons-group"
          key={`theme-${theme}`}
        >
          <FormControlLabel
            value="light"
            control={
              <Radio
                key={`radio-theme-${theme}`}
                suppressContentEditableWarning
                suppressHydrationWarning
                sx={{
                  color: `${theme === "light" ? "black" : "white"}`,
                  "&.Mui-checked": {
                    color: `${theme === "light" ? "black" : "white"}`,
                  },
                }}
              />
            }
            label="Light (Default)"
            onClick={() => setTheme("light")}
          />
          <FormControlLabel
            key={`radio-theme-${theme}+1234`}
            value="dark"
            control={
              <Radio
                suppressContentEditableWarning
                suppressHydrationWarning
                sx={{
                  color: `${theme === "light" ? "black" : "white"}`,
                  "&.Mui-checked": {
                    color: `${theme === "light" ? "black" : "white"}`,
                  },
                }}
              />
            }
            label="Dark"
            onClick={() => setTheme("dark")}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Settings;
