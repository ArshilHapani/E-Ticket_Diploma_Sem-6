// For profile textfields
const profile_edit_textfield = {
  "& .MuiFormLabel-root": {
    color: "#0d1b2a",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#0d1b2a",
  },
  "& .MuiInputBase-root": {
    color: "#0d1b2a",
  },
  "& label.Mui-focused": {
    color: "#0d1b2a",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "secondary",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#0d1b2a",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#0d1b2a",
  },
  "&:hover": {
    borderBottomColor: "#0d1b2a",
  },
  width: "100%",
  margin: "0.4rem 0",
};

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
    backgroundColor: "primary",
    cancelButton: {
      marginTop: "1.2rem",
      marginRight: "0.6rem",
    },
  },
};

export { modelAutocomplete, profile_edit_textfield };
