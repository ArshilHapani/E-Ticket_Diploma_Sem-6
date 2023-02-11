import { Alert, IconButton, Snackbar } from "@mui/material";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useStateContext } from "../../context/stateContext";

const SnackbarAlert = () => {
  const { snackbar, setSnackbar } = useStateContext();

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setSnackbar({ ...snackbar, show: false })}
      >
        <MdOutlineClose fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <div>
      <Snackbar
        open={snackbar.show}
        autoHideDuration={6000}
        action={action}
        onClose={() => setSnackbar({ ...snackbar, show: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          zIndex: 1123456789,
        }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, show: false })}
          severity={snackbar.type}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {snackbar.message}{" "}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackbarAlert;
