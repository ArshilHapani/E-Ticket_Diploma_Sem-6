import React from "react";
import { sidebarItems } from "../../constants/sidebarItems";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { IoBusOutline } from "react-icons/io5";
import { useStateContext } from "../../context/stateContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Sidebar = () => {
  const { sidebarMenu, setSidebarMenu } = useStateContext();
  return (
    <>
      <div className="sidebar-container light">
        <Link to="/" className="logo-container light">
          <IoBusOutline className="logo-icon" />
          <span>E-Ticket</span>
        </Link>
        {sidebarItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={item.title + index}
            className="sidebar-items light"
          >
            <i>{item.icon}</i>
            <p>{item.title}</p>
          </NavLink>
        ))}
      </div>
      {sidebarMenu && (
        <div className="sidebar-menu light">
          <Link to="/" className="logo-container light">
            <IoBusOutline className="logo-icon" />
            <span>E-Ticket</span>
            <span className="close-icon">
              <AiOutlineCloseCircle onClick={() => setSidebarMenu(false)} />
            </span>
          </Link>
          {sidebarItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={item.title + index}
              className="sidebar-items light"
            >
              <i>{item.icon}</i>
              <p>{item.title}</p>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
