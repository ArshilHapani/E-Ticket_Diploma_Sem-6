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
  };

  return { modelStyle, modelTextField, modelAutocomplete };
}
