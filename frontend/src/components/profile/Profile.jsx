import {
  Avatar,
  Box,
  Button,
  colors,
  Divider,
  Modal,
  Typography,
} from "@mui/material";
import { MdPhotoCamera } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import React, { useState } from "react";
import "./Profile.scss";
import { useStateContext } from "../../context/stateContext";
import avatar from "../../assets/download.jpeg";
import useMuiStyles from "../../hooks/useMuiStyles";
import { useNavigate, useParams } from "react-router-dom";
import { Stack } from "@mui/system";
import UpdateProfileModel from "./UpdateProfileModel";

const userObj = {
  name: "Arshil",
  username: "arshil_hapani",
  email: "arshil_hapani@gmail.com",
  mobileNumber: 7778887156,
  dateOfBirth: "1-10-2004",
  age: 18,
};
const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  document.title = `E-Ticket | Profile - ${id}`;
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    name: userObj.name,
    username: userObj.username,
    email: userObj.email,
    mobileNumber: userObj.mobileNumber,
    dateOfBirth: userObj.dateOfBirth,
    age: userObj.age,
  });
  const { theme, setBuyTicketModel, showSnackBar } = useStateContext();
  const { detail_ref_style, profile_divider_styles } = useMuiStyles();
  const [open, setOpen] = useState(false);
  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (
      updatedUserInfo.name === "" ||
      updatedUserInfo.age === "" ||
      updatedUserInfo.dateOfBirth === "" ||
      updatedUserInfo.email === "" ||
      updatedUserInfo.mobileNumber === "" ||
      updatedUserInfo.username === ""
    ) {
      showSnackBar("Please fill all the required fields", "error");
      return;
    }
    if (updatedUserInfo.mobileNumber.length !== 10) {
      showSnackBar("Length of mobile number must be of 10", "error");
      return;
    }
    console.log(updatedUserInfo);
    setOpen(false);
    showSnackBar("soon changes get reflected", "success");
    userObj.name = updatedUserInfo.name;
    userObj.email = updatedUserInfo.email;
    userObj.dateOfBirth = updatedUserInfo.dateOfBirth;
    userObj.age = updatedUserInfo.age;
    userObj.mobileNumber = updatedUserInfo.mobileNumber;
    userObj.username = updatedUserInfo.username;
    //TODO
  };
  return (
    <Box
      className={`user-profile-container ${
        theme === "light" ? "light" : "dark"
      }`}
    >
      <div
        className={`profile-header-section  ${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <Box className="profile-hero-section dark">
          <Avatar
            src={avatar}
            sx={{
              bgcolor: colors.red[600],
              width: 90,
              height: 90,
              fontSize: 50,
            }}
            className="img-avatar"
            alt="profile-picture"
          ></Avatar>
          <Button
            variant="outlined"
            component="label"
            startIcon={<MdPhotoCamera />}
            color="info"
          >
            Upload image
            <input hidden accept="image/*" type="file" onChange={uploadImage} />
          </Button>
        </Box>
        <div className="profile-credentials-container">
          <Typography sx={detail_ref_style}>name</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            {userObj.name}
          </Typography>
          <Divider sx={profile_divider_styles} />
          <Typography sx={detail_ref_style}>username</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            {userObj.username}
          </Typography>
          <Divider sx={profile_divider_styles} />

          <Typography sx={detail_ref_style}>email</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            {userObj.email}
          </Typography>
          <Divider sx={profile_divider_styles} />

          <Typography sx={detail_ref_style}>mobile number</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            +91 {userObj.mobileNumber}
          </Typography>
          <Divider sx={profile_divider_styles} />
          <Typography sx={detail_ref_style}>Date Of Birth</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            {userObj.dateOfBirth}
          </Typography>
          <Divider sx={profile_divider_styles} />
          <Typography sx={detail_ref_style}>age</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            {userObj.age}
          </Typography>

          <Divider sx={profile_divider_styles} />
          <Button
            variant="outlined"
            sx={{ margin: ".5rem 0" }}
            component="label"
            startIcon={<AiFillEdit />}
            color="info"
            onClick={() => setOpen(true)}
          >
            Edit Profile
          </Button>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form onSubmit={handleForm}>
              <UpdateProfileModel
                updatedUserInfo={updatedUserInfo}
                setUpdatedUserInfo={setUpdatedUserInfo}
                setOpen={setOpen}
              />
            </form>
          </Modal>
        </div>
        <div className="user-non-req-details">
          <Typography sx={detail_ref_style}>
            Total number of ticket generated
          </Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>78</Typography>
          <Divider sx={profile_divider_styles} />
          <Stack direction="column" gap={1}>
            <Button variant="outlined" onClick={() => navigate("/tickets")}>
              View active tickets
            </Button>
            <Button variant="outlined" onClick={() => setBuyTicketModel(true)}>
              Buy Ticket
            </Button>
          </Stack>
        </div>
      </div>
    </Box>
  );
};

export default Profile;
