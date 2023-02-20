import React from "react";
import "./navbar.scss";
import avatar from "../../assets/download.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BiPurchaseTag } from "react-icons/bi";
import { useStateContext } from "../../context/stateContext";
import {
  Avatar,
  colors,
  Menu,
  MenuItem,
  Zoom,
  Tooltip,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
const Navbar = () => {
  const { setSidebarMenu, theme, setBuyTicketModel } = useStateContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className={`${theme === "light" ? "light" : "dark"}`}>
        <div
          className="icon-menu-btn"
          onClick={() => setSidebarMenu((prevVal) => !prevVal)}
        >
          <AiOutlineMenu />
        </div>
        <Tooltip
          title="your balance"
          placement="bottom"
          TransitionComponent={Zoom}
        >
          <div
            className={`balance-container ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            <div>
              Current balance - <span>500 &#8377;</span>
            </div>
          </div>
        </Tooltip>
        <div
          className={`profile-container ${
            theme === "light" ? "light" : "dark"
          }`}
        >
          <div onClick={handleClick}>
            <Avatar
              src={avatar}
              sx={{
                bgcolor: colors.red[600],
                width: 60,
                height: 60,
              }}
              className="img-avatar"
              alt="profile-picture"
            ></Avatar>
          </div>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            sx={{
              padding: "0.5rem 1rem",
            }}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {/* //TODO... */}
            <Box>
              <Stack
                direction="column"
                sx={{ margin: "0.5rem 1rem" }}
                justifyContent="center"
                alignItem="center"
              >
                <Stack
                  justifyContent="space-between"
                  alignItems="center"
                  direction="row"
                >
                  <Avatar
                    src={avatar}
                    sx={{
                      bgcolor: colors.red[600],
                      width: 60,
                      height: 60,
                    }}
                  />
                  <Link
                    className="link-styles-anchor-tags"
                    to={"/profile/12345"}
                  >
                    {" "}
                    <MenuItem>Edit profile</MenuItem>
                  </Link>
                </Stack>
                <Typography fontSize={20} fontWeight={700} marginTop={1.5}>
                  Arshil Hapani
                </Typography>
                <Typography
                  fontSize={14}
                  fontWeight={500}
                  sx={{ color: "#778da9" }}
                >
                  arshilhapani998@gmail.com
                </Typography>
                {/* //TODO */}
              </Stack>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setBuyTicketModel(true);
                }}
              >
                <BiPurchaseTag />{" "}
                <Typography sx={{ marginLeft: "0.6rem" }}>
                  {" "}
                  Buy Ticket
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <FiLogOut />{" "}
                <Typography sx={{ marginLeft: "0.6rem" }}> Logout</Typography>
              </MenuItem>
            </Box>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
