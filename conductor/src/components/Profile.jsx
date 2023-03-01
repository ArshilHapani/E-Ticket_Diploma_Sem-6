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
import avatar from "../assets/download.jpeg";
import EditProfileModel from "./EditProfileModel";
const conductorObj = {
  name: "Baburao apt",
  username: "baburaoApte",
  email: "baburao@gmail.com",
  mobile: 798896896,
  dob: "10-4-1998",
  image: avatar,
};
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
  document.title = "E-Ticket | Conductor - Profile";
  const [profileModal, setProfileModal] = useState(false);
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
            src={conductorObj.image}
            sx={{ width: 70, height: 70 }}
            alt={conductorObj.name}
          />
          <Button
            variant="outlined"
            component="label"
            endIcon={<MdPhotoCamera />}
            sx={{
              width: "180px",
            }}
          >
            Upload
            <input hidden accept="image/*" multiple type="file" />
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
                initialValues={conductorObj}
                closeModal={setProfileModal}
              />
            </Box>
          </Modal>
        </Stack>
        <Stack width="60%" gap={1}>
          <Typography sx={labelStyle}>Name</Typography>
          <Typography sx={userDetailsStyle}>{conductorObj.name}</Typography>
          <Divider />
          <Typography sx={labelStyle}>username</Typography>
          <Typography sx={userDetailsStyle}>{conductorObj.username}</Typography>
          <Divider />
          <Typography sx={labelStyle}>email</Typography>
          <Typography sx={userDetailsStyle}>{conductorObj.email}</Typography>
          <Divider />
          <Typography sx={labelStyle}>mobile</Typography>
          <Typography sx={userDetailsStyle}>{conductorObj.mobile}</Typography>
          <Divider />
          <Typography sx={labelStyle}>Date of Birth</Typography>
          <Typography sx={userDetailsStyle}>{conductorObj.dob}</Typography>
          <Divider />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
