/* eslint-disable react-hooks/exhaustive-deps */
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
import React, { useState, useEffect, useMemo, Suspense } from "react";

import { useStateContext } from "../../context/stateContext";
import { fetchStation, generateFare } from "../../functions";
import { createTicket } from "../../functions/createTicket";
import useMuiStyles from "../../hooks/useMuiStyles";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

const PurchaseTicketModel = () => {
  const navigate = useNavigate();
  const {
    theme,
    buyTicketModel,
    setBuyTicketModel,
    showSnackBar,
    setLoader,
    loader,
    setToggleSync,
  } = useStateContext();
  const [dropdownStations, setDropdownStations] = useState([]);
  const [fareText, setFareText] = useState(0);
  const { modelStyle, modelTextField, modelAutocomplete } = useMuiStyles();
  const [dist, setDist] = useState({
    source: "",
    destination: "",
    quantity: 1,
  });
  useEffect(() => {
    setLoader(true);
    callGenerateFare();
    setLoader(false);
  }, [dist]);
  useMemo(() => {
    fetchStation(setDropdownStations, showSnackBar);
  }, []);

  async function callGenerateFare() {
    const fare = await generateFare(dist);
    setFareText(fare);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (dist.source === "" || dist.destination === "") {
      showSnackBar("Please select source and/or destination", "error");
      return;
    }

    console.log(dist);
    setLoader(true);
    createTicket(dist, showSnackBar);
    setLoader(false);
    setBuyTicketModel(false);
    setDist({
      source: "",
      destination: "",
      quantity: 1,
    });
    setToggleSync(false);
    navigate("/tickets");
  };
  return (
    <Modal
      open={buyTicketModel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Suspense fallback={<Loader />}>
        <form onSubmit={handleSubmit}>
          <Fade in={buyTicketModel}>
            <Box sx={modelStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Select your stations
              </Typography>
              {/* For source */}
              <Autocomplete
                disablePortal
                id="auto-highlight"
                autoHighlight
                isOptionEqualToValue={dropdownStations?.st_id}
                onChange={(event, value) => {
                  setDist({ ...dist, source: value });
                }}
                sx={modelAutocomplete}
                options={dropdownStations}
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
                isOptionEqualToValue={dropdownStations?.st_id}
                onChange={(event, value) =>
                  setDist({ ...dist, destination: value })
                }
                options={dropdownStations}
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
                  Number of Tickets : {dist?.quantity}
                </Typography>
                <Slider
                  aria-label="Temperature"
                  defaultValue={1}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={5}
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
                  onClick={() => setBuyTicketModel(false)}
                >
                  Cancel
                </Button>
                <LoadingButton
                  variant="contained"
                  sx={modelAutocomplete.generateTicketButton}
                  type="submit"
                  loading={loader}
                >
                  Generate Ticket ({dist.quantity * fareText}&#8377;)
                </LoadingButton>
              </Box>
            </Box>
          </Fade>
        </form>
      </Suspense>
    </Modal>
  );
};

export default PurchaseTicketModel;
