import React from "react";
import "./navbar.scss";
import avatar from "../../assets/download.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../../context/stateContext";
import { Avatar, colors, Tooltip, Zoom } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setSidebarMenu, theme } = useStateContext();
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
          arrow
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
          <Tooltip
            title="Profile"
            arrow
            TransitionComponent={Zoom}
            placement="left"
          >
            <Link to={"/profile/12345"}>
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
            </Link>
          </Tooltip>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
