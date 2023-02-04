import React from "react";
import "./navbar.scss";
import avatar from "../../assets/avatar.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../../context/stateContext";
import { Avatar, colors, Tooltip, Zoom } from "@mui/material";
const Navbar = () => {
  const { setSidebarMenu, theme } = useStateContext();
  return (
    <>
      <nav className={`${theme === "light" ? "light" : "dark"}`}>
        <div
          className="icon-menu-btn"
          onClick={() =>
            setSidebarMenu((prevVal) => (prevVal === true ? false : true))
          }
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
            <Avatar
              src={avatar}
              sx={{
                bgcolor: colors.red[600],
                width: 60,
                height: 60,
              }}
              className="img-avatar"
            ></Avatar>
          </Tooltip>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
