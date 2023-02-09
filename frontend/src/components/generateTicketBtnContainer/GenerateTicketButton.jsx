import React, { useState } from "react";
import "./generateTicketBtn.scss";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { FaExchangeAlt } from "react-icons/fa";
import { useStateContext } from "../../context/stateContext";
import useMuiStyles from "../../hooks/useMuiStyles";
import { top100Films } from "../../constants/dummy";

const GenerateTicketButton = () => {
  const [model, setModel] = useState(false);
  const { homeTicketDetails, theme } = useStateContext();
  const { modelStyle, modelTextField, modelAutocomplete } = useMuiStyles();
  return (
    <>
      <Box
        className={`generate-ticket-btn-container ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <Card
          variant="outlined"
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
          // onClose={() => setModel(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modelStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Select your stations
            </Typography>
            <Autocomplete
              // TODO to make asynchronous request on api call (Prefer mui documentation)
              disablePortal
              id="auto-highlight"
              autoHighlight
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
                />
              )}
            />
            <Autocomplete
              disablePortal
              id="auto-highlight"
              sx={modelAutocomplete}
              autoHighlight
              options={top100Films}
              PaperComponent={({ children }) => (
                <Paper
                  style={{
                    background: theme === "light" ? "#f1f5f9" : "#33373e",
                    color: theme === "light" ? "#0d1b2a" : "#f1f5f9 ",
                    "&::webkit-scrollbar": "2px",
                    "&::webkit-scrollbar-track":
                      theme === "light" ? "#e5e5e5" : "#0d1b2a",
                    "&::webkit-scrollbar-thumb":
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
                />
              )}
            />
            <Box sx={modelAutocomplete.generateTicketButtonContainer}>
              <Button
                variant="contained"
                sx={modelAutocomplete.generateTicketButton}
              >
                Generate Ticket
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={modelAutocomplete.generateTicketButton.cancelButton}
                onClick={() => setModel(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default GenerateTicketButton;
