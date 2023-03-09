import {
  Avatar,
  Button,
  Divider,
  Modal,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import EditProfileModel from "./EditProfileModel";
import { useStateContext } from "../context/stateContext";
import b64Convertor from "../functions/b64Convertor";
import { useNavigate } from "react-router-dom";
const labelStyle = {
  color: "#8d99ae",
  fontSize: 15,
  fontFamily: "Actor",
};
const userDetailsStyle = {
  fontSize: 19,
  color: "#2b2d42",
};

const Profile = () => {
  const navigate = useNavigate();
  document.title = "E-Ticket | Conductor - Profile";
  const [profileModal, setProfileModal] = useState(false);
  const { user, setLoading, snackbarSetterFunction, fetchUser } =
    useStateContext();
  const [localObj, setLocalObj] = useState({
    name: user?.c_name,
    username: user?.c_uname,
    email: user?.c_email,
    mobile: user?.c_no,
    dob: user?.c_dob,
    image: user?.c_img,
  });
  if (
    localObj.name === undefined ||
    localObj.name === "" ||
    localObj.name === null
  ) {
    navigate("/");
  }
  console.log("Local OBJ");
  console.log(localObj);

  const uploadImage = (e) => {
    e.preventDefault();
    setLoading(true);
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    console.log(selectedFile.size);
    if (
      selectedFile.type !== "image/jpeg" &&
      selectedFile.type !== "image/png" &&
      selectedFile.type !== "image/svg" &&
      selectedFile.type !== "image/jpg"
    ) {
      snackbarSetterFunction(
        "Please upload an image with valid format",
        "error"
      );
      setLoading(false);
      return;
    }
    if (selectedFile.size >= 1000000) {
      snackbarSetterFunction(
        "Size of the image must be less than 1 mb",
        "error"
      );
      setLoading(false);
      return;
    }
    b64Convertor(selectedFile, snackbarSetterFunction);
    fetchUser();
    console.log("upload image");
    console.log(user);
    setLocalObj({
      name: user?.c_name,
      username: user?.c_uname,
      email: user?.c_email,
      mobile: user?.c_no,
      dob: user?.c_dob,
      image: user?.c_img,
    });
    setLoading(false);
  };
  return (
    <Stack
      sx={{
        background: "#f2f2f2",
        height: "100%",
        width: "100%",
        transition: "all 0.2s ease-in-out",
      }}
      direction="column"
      justifyContent={{
        sm: "flex-start",
        xs: "flex-start",
        md: "center",
        lg: "center",
      }}
      alignItems="center"
    >
      <Stack
        direction={{
          md: "row",
          lg: "row",
          xs: "column",
          sm: "column",
        }}
        justifyContent="center"
        bgcolor="#fff"
        width={{
          xs: "96%",
          sm: "96%",
          md: "80%",
          lg: "50%",
        }}
        height={{
          xs: "90%",
          sm: "90%",
          md: "70%",
          lg: "60%",
        }}
        sx={{
          "&:hover": {
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          },
          borderRadius: "8px",
          padding: "1rem",
        }}
        gap={10}
        alignItems="center"
      >
        <Stack
          direction="column"
          gap={2}
          justifyContent="center"
          alignItems="center"
          width="40%"
        >
          <Avatar
            src={`data:image/png;base64,${localObj.image}`}
            sx={{ width: 70, height: 70, bgcolor: "#3f51b5" }}
            alt={localObj.name}
          >
            {localObj?.username?.charAt(0)}
          </Avatar>
          <Button
            variant="outlined"
            component="label"
            endIcon={<MdPhotoCamera />}
            sx={{
              width: "180px",
            }}
          >
            Upload
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={uploadImage}
            />
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "180px",
            }}
            component="label"
            endIcon={<AiFillEdit />}
            onClick={() => setProfileModal(true)}
          >
            Edit profile
          </Button>
          <Modal open={profileModal} onClose={() => setProfileModal(false)}>
            <Box>
              <EditProfileModel
                initialValues={localObj}
                closeModal={setProfileModal}
              />
            </Box>
          </Modal>
        </Stack>
        <Stack width="60%" gap={1}>
          <Typography sx={labelStyle}>Name</Typography>
          <Typography sx={userDetailsStyle}>{localObj.name}</Typography>
          <Divider />
          <Typography sx={labelStyle}>username</Typography>
          <Typography sx={userDetailsStyle}>{localObj.username}</Typography>
          <Divider />
          <Typography sx={labelStyle}>email</Typography>
          <Typography sx={userDetailsStyle}>{localObj.email}</Typography>
          <Divider />
          <Typography sx={labelStyle}>mobile</Typography>
          <Typography sx={userDetailsStyle}>
            {localObj.mobile === null
              ? "No mobile number added"
              : localObj.mobile}
          </Typography>
          <Divider />
          <Typography sx={labelStyle}>Date of Birth</Typography>
          <Typography sx={userDetailsStyle}>{localObj.dob}</Typography>
          <Divider />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
