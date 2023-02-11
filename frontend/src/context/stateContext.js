import { useState, useContext, createContext } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [homeTicketDetails, setHomeTicketDetails] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== null || undefined
      ? localStorage.getItem("theme")
      : "light"
  );
  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    type: "",
  });
  localStorage.setItem("theme", theme);
  return (
    <stateContext.Provider
      value={{
        sidebarMenu,
        setSidebarMenu,
        homeTicketDetails,
        setHomeTicketDetails,
        theme,
        setTheme,
        setSnackbar,
        snackbar,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
