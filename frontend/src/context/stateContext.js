import { useState, useContext, createContext } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [homeTicketDetails, setHomeTicketDetails] = useState(true);
  const [theme, setTheme] = useState("dark");
  return (
    <stateContext.Provider
      value={{
        sidebarMenu,
        setSidebarMenu,
        homeTicketDetails,
        setHomeTicketDetails,
        theme,
        setTheme,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
