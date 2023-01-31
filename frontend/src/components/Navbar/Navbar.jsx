import React from "react";
import "./navbar.scss";
import avatar from "../../assets/avatar.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../../context/stateContext";
const Navbar = () => {
  const { setSidebarMenu } = useStateContext();
  return (
    <>
      <nav className="light">
        <div
          className="icon-menu-btn"
          onClick={() =>
            setSidebarMenu((prevVal) => (prevVal === true ? false : true))
          }
        >
          <AiOutlineMenu />
        </div>
        <div className="balance-container light">
          <div>
            Current balance - <span>500 &#8377;</span>
          </div>
        </div>
        <div className="profile-container light">
          Hello &nbsp;<span> Arshil Hapani</span>
          <img src={avatar} alt="user-profile" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
