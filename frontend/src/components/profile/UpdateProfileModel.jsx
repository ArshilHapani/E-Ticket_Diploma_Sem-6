import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useMuiStyles from "../../hooks/useMuiStyles";

const UpdateProfileModel = ({
  updatedUserInfo,
  setUpdatedUserInfo,
  setOpen,
}) => {
  const { profile_edit_textfield, modelStyle, modelAutocomplete } =
    useMuiStyles();
  const navigate = useNavigate();
  if (
    updatedUserInfo.name === "" ||
    updatedUserInfo.name === undefined ||
    updatedUserInfo.name === null
  ) {
    navigate("/");
  } //TODO
  return (
    <Box sx={modelStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Update profile
      </Typography>
      <TextField
        label="name"
        sx={profile_edit_textfield}
        placeholder="update name"
        variant="standard"
        value={updatedUserInfo.name}
        onChange={(e) =>
          setUpdatedUserInfo({
            ...updatedUserInfo,
            name: e.target.value,
          })
        }
        color="info"
        InputLabelProps={{ shrink: true }}
        type="text"
      />
      <TextField
        label="username"
        sx={profile_edit_textfield}
        value={updatedUserInfo.uname}
        onChange={(e) =>
          setUpdatedUserInfo({
            ...updatedUserInfo,
            uname: e.target.value,
          })
        }
        placeholder="update username"
        variant="standard"
        color="info"
        InputLabelProps={{ shrink: true }}
        type="text"
      />

      <TextField
        label="email"
        sx={profile_edit_textfield}
        value={updatedUserInfo.email}
        onChange={(e) =>
          setUpdatedUserInfo({
            ...updatedUserInfo,
            email: e.target.value,
          })
        }
        placeholder="update email"
        variant="standard"
        color="info"
        InputLabelProps={{ shrink: true }}
        type="email"
      />
      <TextField
        label="mobile number"
        sx={profile_edit_textfield}
        value={updatedUserInfo.no}
        onChange={(e) =>
          setUpdatedUserInfo({
            ...updatedUserInfo,
            no: e.target.value,
          })
        }
        placeholder="update mobile number"
        variant="standard"
        color="info"
        InputLabelProps={{ shrink: true }}
        maxLength={10}
        type="number"
        className="number-tb"
      />
      <Box sx={modelAutocomplete.generateTicketButtonContainer}>
        <Button
          variant="outlined"
          color="error"
          sx={modelAutocomplete.generateTicketButton.cancelButton}
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={modelAutocomplete.generateTicketButton}
          type="submit"
        >
          Update credentials
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateProfileModel;
