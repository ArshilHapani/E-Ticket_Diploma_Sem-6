import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Button,
  Fade,
  Modal,
  Paper,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { top100Films } from "../../constants/dummy";
import { useStateContext } from "../../context/stateContext";
import useMuiStyles from "../../hooks/useMuiStyles";
const PurchaseTicketModel = () => {
  const { theme, buyTicketModel, setBuyTicketModel, showSnackBar } =
    useStateContext();
  const { modelStyle, modelTextField, modelAutocomplete } = useMuiStyles();
  const [dist, setDist] = useState({
    source: "",
    destination: "",
    quantity: 1,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (dist.source === "" || dist.destination === "") {
      showSnackBar("Please select source and/or destination", "error");
      return;
    }
    console.log(dist);
    showSnackBar("Ticket generated successfully", "success");
    setBuyTicketModel(false);
  };
  return (
    <Modal
      open={buyTicketModel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={handleSubmit}>
        <Fade in={buyTicketModel}>
          <Box sx={modelStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Select your stations
            </Typography>
            {/* For source */}
            <Autocomplete
              // TODO to make asynchronous request on api call (Prefer mui documentation)
              disablePortal
              id="auto-highlight"
              autoHighlight
              onChange={(event, value) => {
                setDist({ ...dist, source: value });
              }}
              sx={modelAutocomplete}
              options={top100Films}
              PaperComponent={({ children }) => (
                <Paper
                  style={{
                    background: theme === "light" ? "#f1f5f9" : "#33373e",
                    color: theme === "light" ? "#0d1b2a" : "#f1f5f9 ",
                  }}
                >
                  {children}
                </Paper>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Current"
                  variant="standard"
                  sx={modelTextField}
                  className="model-autocomplete-textfield"
                  color="error"
                />
              )}
            />
            {/* for destinations */}
            <Autocomplete
              disablePortal
              id="auto-highlight"
              sx={modelAutocomplete}
              autoHighlight
              onChange={(event, value) =>
                setDist({ ...dist, destination: value })
              }
              options={top100Films}
              PaperComponent={({ children }) => (
                <Paper
                  style={{
                    background: theme === "light" ? "#f1f5f9" : "#33373e",
                    color: theme === "light" ? "#0d1b2a" : "#f1f5f9 ",
                    "&::webkitScrollbar": { width: "2px" },
                    "&::webkitScrollbarTrack":
                      theme === "light" ? "#e5e5e5" : "#0d1b2a",
                    "&::webkitScrollbarThumb":
                      theme === "light" ? "#0d1b2a" : "#e5e5e5",
                  }}
                >
                  {children}
                </Paper>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Destination"
                  variant="standard"
                  sx={modelTextField}
                  className="model-autocomplete-textfield"
                  color="error"
                />
              )}
            />
            <Stack
              direction="column"
              justifyContent="center"
              sx={{
                margin: "0.8rem 1.2rem",
              }}
              alignItems="center"
            >
              <Typography sx={{ margin: "0" }}>
                Number of Tickets : {dist.quantity}
              </Typography>
              <Slider
                aria-label="Temperature"
                defaultValue={1}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
                onChange={(e) => setDist({ ...dist, quantity: e.target.value })}
                sx={{ width: "98%", marginTop: "0.6rem" }}
              />
            </Stack>
            <Box sx={modelAutocomplete.generateTicketButtonContainer}>
              <Button
                variant="outlined"
                color="error"
                sx={modelAutocomplete.generateTicketButton.cancelButton}
                onClick={() => setBuyTicketModel(false)}
              >
                Cancel
              </Button>
              <LoadingButton
                variant="contained"
                sx={modelAutocomplete.generateTicketButton}
                type="submit"
              >
                Generate Ticket ({dist.quantity * 4}&#8377;)
              </LoadingButton>
            </Box>
          </Box>
        </Fade>
      </form>
    </Modal>
  );
};

export default PurchaseTicketModel;
