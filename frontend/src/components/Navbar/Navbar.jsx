import React from "react";
import "./navbar.scss";
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
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const Navbar = () => {
  const { setSidebarMenu, theme, setBuyTicketModel, newUser } =
    useStateContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  if (
    localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined ||
    localStorage.getItem("user") === ""
  ) {
    navigate("/signUp");
  }
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
            <Link to="/" className="link-styles-anchor-tags">
              <div>
                {" "}
                Current balance - <span>{newUser?.p_balance} &#8377;</span>
              </div>
            </Link>
          </div>
        </Tooltip>
        <div
          className={`profile-container ${
            theme === "light" ? "light" : "dark"
          }`}
        >
          <div onClick={handleClick}>
            <Avatar
              src={newUser?.p_img}
              sx={{
                bgcolor: colors.red[600],
                width: 60,
                height: 60,
              }}
              className="img-avatar"
              alt="profile-picture"
            >
              {newUser?.p_name?.charAt(0)}
            </Avatar>
          </div>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            sx={{
              padding: "0.5rem 1rem",
              "& .MuiPaper-root": {
                backgroundColor: theme === "light" ? "#fff" : "#20232a",
                borderRadius: "20px",
              },
              color: theme === "light" ? "#0d1b2a" : "#f2f2f2",
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
            <Box>
              <Stack
                direction="column"
                sx={{ margin: "0.5rem 1rem" }}
                justifyContent="center"
              >
                <Stack
                  justifyContent="space-between"
                  direction="row"
                  alignItems="center"
                >
                  <Link
                    className="link-styles-anchor-tags"
                    to={`/profile/${newUser?.p_uname}`}
                    onClick={handleClose}
                  >
                    <Avatar
                      src={newUser?.p_img}
                      sx={{
                        bgcolor: colors.red[600],
                        width: 80,
                        height: 80,
                      }}
                    >
                      {newUser?.p_name?.charAt(0)}
                    </Avatar>
                  </Link>
                  <Link
                    className="link-styles-anchor-tags"
                    to={`/profile/${newUser?.p_uname}`}
                    onClick={handleClose}
                  >
                    {" "}
                    <MenuItem
                      sx={{
                        color: theme === "light" ? "#0d1b2a" : "#f2f2f2",
                        marginLeft: "0.4rem",
                      }}
                    >
                      Edit profile
                    </MenuItem>
                  </Link>
                </Stack>
                <Typography
                  fontSize={20}
                  fontWeight={700}
                  marginTop={1.5}
                  sx={{ color: theme === "light" ? "#0d1b2a" : "#f2f2f2" }}
                >
                  {newUser?.p_name}
                </Typography>
                <Typography
                  fontSize={14}
                  fontWeight={500}
                  sx={{ color: "#778da9" }}
                >
                  {newUser?.p_email}
                </Typography>
                {/* //TODO */}
              </Stack>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setBuyTicketModel(true);
                }}
              >
                <BiPurchaseTag
                  color={theme === "light" ? "#0d1b2a" : "#f2f2f2"}
                />{" "}
                <Typography
                  sx={{
                    marginLeft: "0.6rem",
                    color: theme === "light" ? "#0d1b2a" : "#f2f2f2",
                  }}
                >
                  {" "}
                  Buy Ticket
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  localStorage.clear();
                  navigate("/signIn");
                }}
              >
                <FiLogOut color={theme === "light" ? "#0d1b2a" : "#f2f2f2"} />{" "}
                <Typography
                  sx={{
                    marginLeft: "0.6rem",
                    color: theme === "light" ? "#0d1b2a" : "#f2f2f2",
                  }}
                >
                  {" "}
                  Logout
                </Typography>
              </MenuItem>
            </Box>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
