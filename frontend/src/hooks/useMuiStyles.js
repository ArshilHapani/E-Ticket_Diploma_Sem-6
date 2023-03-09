import { useStateContext } from "../context/stateContext";

export default function useMuiStyles() {
  const { theme } = useStateContext();
  // Model
  const modelStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      xs: 240,
      sm: 270,
      md: 370,
      lg: 420,
    },
    backgroundColor: theme === "light" ? "background.paper" : "#20232a",
    color: theme === "light" ? "#0d1b2a" : "background.paper",
    border:
      theme === "light" ? "1px solid #20232a" : "2px solid background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  };
  // Autocomplete Parent
  const modelAutocomplete = {
    margin: "0.4rem",
    generateTicketButtonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: {
        sm: "center",
        md: "center",
        lg: "flex-end",
        xl: "flex-end",
      },
      flexWrap: "wrap",
      flexDirection: {
        sm: "column",
        xs: "column",
        md: "row",
        lg: "row",
      },
    },
    generateTicketButton: {
      marginTop: "1.2rem",
      marginRight: "0.6rem",
      "&:disabled": {
        backgroundColor: "#1976d2",
      },
      cancelButton: {
        marginTop: "1.2rem",
        marginRight: "0.6rem",
      },
    },
  };
  //Model textfield
  const modelTextField = {
    "& .MuiFormLabel-root": {
      color: theme === "light" ? "#0d1b2a" : "background.paper",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme === "light" ? "#0d1b2a" : "#e5e5e5",
    },
    "& .MuiInputBase-root": {
      color: theme === "light" ? "#0d1b2a" : "#e5e5e5",
    },
    "& label.Mui-focused": {
      color: theme === "light" ? "#0d1b2a" : "background.paper",
    },
    "& .MuiAutocomplete-root": {
      margin: "1vh",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "secondary",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: theme === "light" ? "#0d1b2a" : "background.paper",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: theme === "light" ? "#0d1b2a" : "background.paper",
    },
    "& .MuiSvgIcon-root": {
      color: theme === "light" ? "#0d1b2a" : "background.paper",
    },
    "& + .MuiAutocomplete-popper": {
      backgroundColor: "#363636",
    },
    "&:hover": {
      borderBottomColor: theme === "light" ? "#e5e5e5" : "#0d1b2a",
    },
  };

  // For profile textfields
  const profile_edit_textfield = {
    "& .MuiFormLabel-root": {
      color: theme === "light" ? "#0d1b2a" : "background.paper",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme === "light" ? "#0d1b2a" : "#e5e5e5",
    },
    "& .MuiInputBase-root": {
      color: theme === "light" ? "#0d1b2a" : "#e5e5e5",
    },
    "& label.Mui-focused": {
      color: theme === "light" ? "#0d1b2a" : "background.paper",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "secondary",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: theme === "light" ? "#0d1b2a" : "background.paper",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: theme === "light" ? "#0d1b2a" : "background.paper",
    },
    "&:hover": {
      borderBottomColor: theme === "light" ? "#0d1b2a" : "#e5e5e5",
    },
    width: "100%",
    margin: "0.4rem 0",
  };
  // profile divider styles
  const profile_divider_styles = {
    width: {
      sm: "80%",
      xs: "80%",
      md: "100%",
      xl: "100%",
    },
    margin: "10px 0",
    bgcolor: theme === "light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.4)",
  };
  // Profile typography styles
  const detail_ref_style = {
    fontSize: "15px",
    color: "#778da9",
    marginTop: "1rem",
    edit_button_style: {
      padding: "10px",
      color: "#fff",
    },
    userDetailStyle: {
      fontSize: "20px",
      color: theme === "light" ? "#0d1b2a" : "background.paper",
    },
  };
  const textTheme = {
    color: theme === "light" ? "#0d1b2a" : "#e5e5e5",
  };
  return {
    modelStyle,
    modelTextField,
    modelAutocomplete,
    profile_edit_textfield,
    detail_ref_style,
    profile_divider_styles,
    textTheme,
  };
}
