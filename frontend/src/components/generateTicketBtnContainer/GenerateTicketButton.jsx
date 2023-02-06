import React, { useState } from "react";
import "./generateTicketBtn.scss";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { FaExchangeAlt } from "react-icons/fa";
import { useStateContext } from "../../context/stateContext";

const GenerateTicketButton = () => {
  const [model, setModel] = useState(false);
  const [staions, setStaions] = useState(null);
  const { homeTicketDetails, theme } = useStateContext();
  const style = {
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
    bgcolor: "background.paper",
    color: "background.black",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    textFieldStyle: {
      color: "#fff !important",
    },
  };
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
      label: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    {
      label: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
  ];

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
          onClose={() => setModel(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            className={`opened-model ${theme === "light" ? "light" : "dark"}`}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Select your stations
            </Typography>
            <Autocomplete
              id="auto-highlight"
              autoHighlight
              options={top100Films}
              sx={style.textFieldStyle}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={style.textFieldStyle}
                  label="autoHighlight"
                  variant="standard"
                />
              )}
            />
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default GenerateTicketButton;
