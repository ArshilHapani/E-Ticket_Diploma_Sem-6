import React, { useState } from "react";
import "./generateTicketBtn.scss";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Fade,
  Modal,
  Paper,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { FaExchangeAlt } from "react-icons/fa";
import { useStateContext } from "../../context/stateContext";
import useMuiStyles from "../../hooks/useMuiStyles";
import { top100Films } from "../../constants/dummy";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { LoadingButton } from "@mui/lab";

const GenerateTicketButton = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const { homeTicketDetails, theme, setSnackbar } = useStateContext();
  const { modelStyle, modelTextField, modelAutocomplete } = useMuiStyles();
  const [dist, setDist] = useState({
    source: "",
    destination: "",
    quantity: 1,
  });
  const handleSubmit = (e) => {
    setButtonLoading(true);
    e.preventDefault();
    console.log(dist);
    setSnackbar({
      show: true,
      message: "Ticket generated successfully",
      type: "success",
    });
    setModel(false);
    setButtonLoading(false);
  };
  // console.log(dist); //! Dist have data of source and destinations with nested objects
  return (
    <>
      <Box
        className={`generate-ticket-btn-container ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <Card
          onClick={() => navigate("/tickets")}
          variant="elevation"
          className={`current-active-ticket-container ${
            theme === "light" ? "light" : "dark"
          }`}
        >
          <h3>
            Currently activated ticket
            {homeTicketDetails ? (
              <span className="green-dot"></span>
            ) : (
              <span className="red-dot"></span>
            )}
          </h3>
          <div className="ticket-macro-container">
            <span>From</span>
            <span>
              <FaExchangeAlt />
              <span className="dot-green"></span>
            </span>
            <span>To</span>
          </div>
          {homeTicketDetails ? (
            <div className="ticket-details-cont">
              <span>Kamrej surat</span>
              <span>Railway station</span>
            </div>
          ) : (
            <div className="empty-ticket-container">
              <span>No current active ticket</span>
            </div>
          )}
        </Card>
        <Button
          variant="contained"
          className="mui__btn-buy-ticket"
          color="error"
          onClick={() => setModel(true)}
        >
          Buy ticket
        </Button>

        {/* For overlay model */}
        <Modal
          open={model}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={handleSubmit}>
            <Fade in={model}>
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
                      required
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
                      required
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
                    required
                    aria-label="Temperature"
                    defaultValue={1}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={10}
                    onChange={(e) =>
                      setDist({ ...dist, quantity: e.target.value })
                    }
                    sx={{ width: "98%", marginTop: "0.6rem" }}
                  />
                </Stack>
                <Box sx={modelAutocomplete.generateTicketButtonContainer}>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={modelAutocomplete.generateTicketButton.cancelButton}
                    onClick={() => setModel(false)}
                  >
                    Cancel
                  </Button>
                  <LoadingButton
                    loading={buttonLoading}
                    loadingPosition="center"
                    variant="contained"
                    sx={modelAutocomplete.generateTicketButton}
                    type="submit"
                    color="primary"
                  >
                    Generate Ticket ({dist.quantity * 4}&#8377;)
                  </LoadingButton>
                </Box>
              </Box>
            </Fade>
          </form>
        </Modal>
      </Box>
    </>
  );
};

export default GenerateTicketButton;
