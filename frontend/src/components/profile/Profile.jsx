import React, { useState, useEffect } from "react";
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
import { Stack } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";

import "./Profile.scss";
import { useStateContext } from "../../context/stateContext";
import useMuiStyles from "../../hooks/useMuiStyles";
import UpdateProfileModel from "./UpdateProfileModel";
import calculateAge from "../../functions/agrCalculate";
import isUserNameValid from "../../functions/userNameValidate";
import b64Convertor from "../../functions/b64Convertor";

const Profile = () => {
  const navigate = useNavigate();

  if (
    localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined ||
    localStorage.getItem("user") === ""
  ) {
    navigate("/signUp");
  }
  const { id } = useParams();
  document.title = `E-Ticket | Profile - ${id}`;
  const {
    theme,
    setBuyTicketModel,
    showSnackBar,
    newUser,
    setLoader,
    setNewUser,
  } = useStateContext();
  const { detail_ref_style, profile_divider_styles } = useMuiStyles();
  const [open, setOpen] = useState(false);

  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    name: newUser.p_name,
    uname: newUser.p_uname,
    email: newUser.p_email,
    no: newUser.p_no,
  });
  const uploadImage = (e) => {
    e.preventDefault();
    setLoader(true);
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    console.log(selectedFile.size);
    if (
      selectedFile.type !== "image/jpeg" &&
      selectedFile.type !== "image/png" &&
      selectedFile.type !== "image/svg" &&
      selectedFile.type !== "image/jpg"
    ) {
      showSnackBar("Please upload an image with valid format", "error");
      setLoader(false);
      return;
    }
    if (selectedFile.size >= 1000000) {
      showSnackBar("Size of the image must be less than 1 mb", "error");
      setLoader(false);
      return;
    }
    b64Convertor(selectedFile, showSnackBar);
    fetchUser();
    setLoader(false);
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (
      updatedUserInfo.name === "" ||
      updatedUserInfo.email === "" ||
      updatedUserInfo.uname === ""
    ) {
      showSnackBar("Please fill all the required fields", "error");
      return;
    }
    if (updatedUserInfo?.no?.length !== 10) {
      showSnackBar("Length of mobile number must be of 10", "error");
      return;
    }
    if (!isUserNameValid(updatedUserInfo.uname)) {
      showSnackBar("Please enter valid username", "error");
      return;
    }
    console.log(updatedUserInfo);
    setLoader(true);
    if (updateProfile(updatedUserInfo)) {
      setOpen(false);
      showSnackBar("Profile updated", "success");
      setLoader(false);
    } else {
      showSnackBar("something went wrong", "error");
      setLoader(false);
    }
  };

  async function updateProfile(updateData) {
    const data = await fetch("http://localhost:6565/changePassenger", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("user").toString(),
      },
      body: JSON.stringify(updateData),
    });

    const response = await data.json();
    const { success } = response;
    fetchUser();
    return success;
  }

  // Fetching data after being updated
  async function fetchUser() {
    setLoader(true);
    const data = await fetch("http://localhost:6565/fetchPassenger", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("user").toString(),
      },
    });
    const response = await data.json();
    const { passenger } = response;
    setNewUser(passenger);
    setLoader(false);
  }

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setNewUser]);

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
            src={newUser?.p_img}
            sx={{
              bgcolor: colors.red[600],
              width: 90,
              height: 90,
              fontSize: 50,
            }}
            className="img-avatar"
            alt="profile-picture"
          >
            {newUser?.p_name?.charAt(0)}
          </Avatar>
          <Button
            variant="outlined"
            component="label"
            startIcon={<MdPhotoCamera />}
            color="info"
          >
            Upload image
            <input hidden type="file" onChange={uploadImage} />
          </Button>
        </Box>
        <div className="profile-credentials-container">
          <Typography sx={detail_ref_style}>name</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            {newUser?.p_name}
          </Typography>
          <Divider sx={profile_divider_styles} />
          <Typography sx={detail_ref_style}>username</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            {newUser?.p_uname}
          </Typography>
          <Divider sx={profile_divider_styles} />

          <Typography sx={detail_ref_style}>email</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            {newUser?.p_email}
          </Typography>
          <Divider sx={profile_divider_styles} />

          <Typography sx={detail_ref_style}>mobile number</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            {newUser?.p_no ? newUser.p_no : "no mobile number added"}
          </Typography>
          <Divider sx={profile_divider_styles} />
          <Typography sx={detail_ref_style}>Date Of Birth</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            {newUser?.p_dob}
          </Typography>
          <Divider sx={profile_divider_styles} />
          <Typography sx={detail_ref_style}>age</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            {calculateAge(newUser?.p_dob)}
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
                setOpen={() => {
                  setOpen(); //TODO fixing update profile bug
                }}
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
