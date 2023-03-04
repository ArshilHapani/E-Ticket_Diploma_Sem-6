import React from "react";
import { useSidebarItems } from "../../constants/sidebarItems";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { IoBusOutline } from "react-icons/io5";
import { useStateContext } from "../../context/stateContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Sidebar = () => {
  const { sidebarMenu, setSidebarMenu, theme } = useStateContext();
  const location = useLocation();
  return (
    <>
      <div
        className={`sidebar-container ${theme === "light" ? "light" : "dark"}`}
      >
        <Link
          to="/"
          className={`logo-container ${theme === "light" ? "light" : "dark"}`}
        >
          <IoBusOutline className="logo-icon" />
          <span>E-Ticket</span>
        </Link>
        {useSidebarItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={item.title + index}
            className={`sidebar-items ${
              location.pathname === item.path && "active"
            } ${theme === "light" ? "light" : "dark"}`}
          >
            <i>{item.icon}</i>
            <p>{item.title}</p>
          </NavLink>
        ))}
      </div>
      <div
        className={`${sidebarMenu ? "active-on" : "active-lose"}`}
        style={{ zIndex: 999 }}
      >
        {sidebarMenu && (
          <div
            className={`sidebar-menu ${theme === "light" ? "light" : "dark"} ${
              sidebarMenu ? "active-on" : "active-lose"
            }`}
            style={{ zIndex: 999 }}
          >
            <Link
              to="/"
              className={`logo-container ${
                theme === "light" ? "light" : "dark"
              }`}
              onClick={() => setSidebarMenu(false)}
            >
              <IoBusOutline className="logo-icon" />
              <span>E-Ticket</span>
              <span className="close-icon">
                <AiOutlineCloseCircle onClick={() => setSidebarMenu(false)} />
              </span>
            </Link>
            {useSidebarItems.map((item, index) => (
              <NavLink
                to={item.path}
                key={item.title + index}
                className={`sidebar-items ${
                  location.pathname === item.path && "active"
                } ${theme === "light" ? "light" : "dark"}`}
                onClick={() => setSidebarMenu(false)}
              >
                <i>{item.icon}</i>
                <p>{item.title}</p>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
