import React, { useEffect, useRef } from "react";
import { useSidebarItems } from "../../constants/sidebarItems";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { IoBusOutline } from "react-icons/io5";
import { useStateContext } from "../../context/stateContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import image from "../../assets/logo-no-background.png";

const Sidebar = () => {
  const { sidebarMenu, setSidebarMenu, theme, newUser } = useStateContext();
  const location = useLocation();
  const sideNavRef = useRef(null);

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setSidebarMenu(false);
    }
  }
  return (
    <>
      <div
        className={`sidebar-container ${theme === "light" ? "light" : "dark"}`}
      >
        <Link
          to="/"
          className={`logo-container ${theme === "light" ? "light" : "dark"}`}
        >
          <img src={image} alt="e-ticket" className="logo-icon" />
          <span>E-Ticket</span>
        </Link>
        {useSidebarItems.map((item, index) => (
          <NavLink
            to={
              item.path === "profile"
                ? `${item.path}/${newUser.p_uname}`
                : item.path
            }
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
          <>
            <div
              style={{
                position: "fixed",
                inset: 0,
                height: "100%",
                width: "100%",
                background: "rgba(0,0,0,0.4)",
                zIndex: 999,
              }}
            />
            <div
              className={`sidebar-menu ${
                theme === "light" ? "light" : "dark"
              } ${sidebarMenu ? "active-on" : "active-lose"}`}
              ref={sideNavRef}
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
                  to={
                    item.path === "profile"
                      ? `${item.path}/${newUser.p_uname}`
                      : item.path
                  }
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
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
