import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useStateContext } from "../context/stateContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 300,
    sm: 350,
    md: 400,
    lg: 500,
  },
  bgcolor: "#f2f2f2",
  boxShadow: 24,
  p: 4,
};
const modelTextField = {
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
  "& .MuiAutocomplete-root": {
    margin: "1vh",
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
  "& .MuiSvgIcon-root": {
    color: "#0d1b2a",
  },
  "& + .MuiAutocomplete-popper": {
    backgroundColor: "#363636",
  },
  "&:hover": {
    borderBottomColor: "#0d1b2a",
  },
  height: "3rem",
};

const EditProfileModel = ({ closeModal, initialValues }) => {
  document.title = "E-Ticket | Conductor - Edit Profile";
  const { snackbarSetterFunction } = useStateContext();
  const [updateData, setUpdateData] = useState({
    name: initialValues.name,
    email: initialValues.email,
    mobileNumber: initialValues.mobile,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      updateData.name === "" ||
      updateData.email === "" ||
      updateData.mobileNumber === ""
    ) {
      snackbarSetterFunction("please fill all the required fields", "error");
      return;
    }
    if (updateData.mobileNumber.length !== 10) {
      snackbarSetterFunction("Length of mobile number must be of 10", "error");
      return;
    }
    console.log(updateData);
    closeModal(false);
    snackbarSetterFunction("Profile updated successfully", "success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack sx={style} gap={2} direction="column">
        <TextField
          sx={modelTextField}
          value={updateData.name}
          variant="standard"
          label="name"
          InputLabelProps={{ shrink: true }}
          onChange={(e) =>
            setUpdateData({ ...updateData, name: e.target.value })
          }
        />

        <TextField
          sx={modelTextField}
          value={updateData.email}
          variant="standard"
          type="email"
          label="email"
          InputLabelProps={{ shrink: true }}
          onChange={(e) =>
            setUpdateData({ ...updateData, email: e.target.value })
          }
        />

        <TextField
          sx={modelTextField}
          variant="standard"
          type="number"
          value={updateData.mobileNumber}
          label="mobile number"
          InputLabelProps={{ shrink: true }}
          onChange={(e) =>
            setUpdateData({ ...updateData, mobileNumber: e.target.value })
          }
        />
        <Stack
          justifyContent="flex-end"
          gap={2}
          direction={{ sm: "column", xs: "column", md: "row", lg: "row" }}
        >
          <Button
            variant="outlined"
            color="error"
            onClick={() => closeModal(false)}
          >
            Close
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Update Profile
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default EditProfileModel;
