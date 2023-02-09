import React from "react";
import { GenerateTicketButton, RecentTickets } from "../../../components";
import "./layout.scss";
import { useStateContext } from "../../../context/stateContext";
const Layout = () => {
  const { theme } = useStateContext();
  return (
    <>
      <div
        className={`layout-container ${theme === "light" ? "light" : "dark"}`}
      >
        <GenerateTicketButton />
        <RecentTickets />
      </div>
    </>
  );
};

export default Layout;
