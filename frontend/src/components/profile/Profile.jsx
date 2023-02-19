import {
  Avatar,
  Box,
  Button,
  colors,
  Divider,
  Modal,
  TextField,
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
const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  document.title = `E-Ticket | Profile - ${id}`;
  const { theme, setSnackbar } = useStateContext();
  const {
    profile_edit_textfield,
    detail_ref_style,
    profile_divider_styles,
    modelStyle,
    modelAutocomplete,
  } = useMuiStyles();
  const [open, setOpen] = useState(false);
  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
  };
  const handleForm = (e) => {
    e.preventDefault();
    setOpen(false);
    setSnackbar({
      show: true,
      message: "soon changes get reflected",
      type: "success",
    });
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
            Arshil Hapani
          </Typography>
          <Divider sx={profile_divider_styles} />
          <Typography sx={detail_ref_style}>username</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            arshil_hapani
          </Typography>
          <Divider sx={profile_divider_styles} />

          <Typography sx={detail_ref_style}>email</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            arshilhapani@gmail.com
          </Typography>
          <Divider sx={profile_divider_styles} />

          <Typography sx={detail_ref_style}>mobile number</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            +91 7778887156
          </Typography>
          <Divider sx={profile_divider_styles} />
          <Typography sx={detail_ref_style}>Date Of Birth</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            1-10-2004
          </Typography>
          <Divider sx={profile_divider_styles} />
          <Typography sx={detail_ref_style}>age</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>18</Typography>

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
              <Box sx={modelStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Update profile
                </Typography>
                <TextField
                  label="name"
                  sx={profile_edit_textfield}
                  placeholder="update name"
                  variant="standard"
                  color="info"
                  required
                  type="text"
                />
                <TextField
                  label="username"
                  sx={profile_edit_textfield}
                  placeholder="update username"
                  variant="standard"
                  color="info"
                  required
                  type="text"
                />

                <TextField
                  label="email"
                  sx={profile_edit_textfield}
                  placeholder="update email"
                  variant="standard"
                  color="info"
                  type="email"
                  required
                />
                <TextField
                  label="mobile number"
                  sx={profile_edit_textfield}
                  placeholder="update mobile number"
                  variant="standard"
                  color="info"
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
            </form>
          </Modal>
        </div>
        <div className="user-non-req-details">
          <Typography sx={detail_ref_style}>
            Total number of ticket generated
          </Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>78</Typography>
          <Divider sx={profile_divider_styles} />
          <Typography sx={detail_ref_style}>userId</Typography>
          <Typography sx={detail_ref_style.userDetailStyle}>
            Ufrt4354r45
          </Typography>
          <Divider sx={profile_divider_styles} />
          <Button variant="outlined" onClick={() => navigate("/tickets")}>
            View active tickets
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Profile;
