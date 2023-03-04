import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { AiOutlineSync } from "react-icons/ai";
import { useStateContext } from "../../context/stateContext";
import useUserFetch from "../../hooks/useUserFetch";
import "./Settings.scss";
const Settings = () => {
  document.title = "E-Ticket | Settings";
  const { theme, setTheme } = useStateContext();
  const { fetchUser } = useUserFetch();

  const setSystemTheme = () => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

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
            label="Light"
            onClick={() => {
              setTheme("light");
            }}
          />
          <FormControlLabel
            key={`radio-theme-${theme}+3435`}
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
            onClick={() => {
              setTheme("dark");
            }}
          />
          <FormControlLabel
            key={`radio-theme-${theme}+1234`}
            value="system-theme"
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
            label="System"
            onClick={setSystemTheme}
          />
        </RadioGroup>
      </FormControl>
      <Box className="sync__btn-cont">
        <Button onClick={() => fetchUser()}>
          Sync changes <AiOutlineSync className="sync_icon" />
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
