import { Avatar, Box, colors } from "@mui/material";
import React from "react";
import "./Profile.scss";
import { useStateContext } from "../../context/stateContext";
import avatar from "../../assets/download.jpeg";
const Profile = () => {
  const { theme } = useStateContext();
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
        <div className="profile-credentials-container">
          <span className="profile-user-name">Arshil</span>
          <span className="profile-user-name-unique">arshil_hapani</span>
          <span className="profile-user-email">arshilhapani@gmail.com</span>
        </div>
      </div>
    </Box>
  );
};

export default Profile;
