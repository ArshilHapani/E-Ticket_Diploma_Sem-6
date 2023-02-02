import { useState, useContext, createContext } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [homeTicketDetails, setHomeTicketDetails] = useState(true);
  return (
    <stateContext.Provider
      value={{
        sidebarMenu,
        setSidebarMenu,
        homeTicketDetails,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
