import { useState, useContext, createContext } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [homeTicketDetails, setHomeTicketDetails] = useState(false);
  const [buyTicketModel, setBuyTicketModel] = useState(false);
  const [loader, setLoader] = useState(false);
  const [newUser, setNewUser] = useState({
    p_uname: "",
    p_pwd: "",
    p_name: "",
    p_email: "",
    p_dob: "",
    p_no: "",
    p_balance: "",
    p_img: "",
  });
  localStorage.setItem("user_path", newUser?.p_uname);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== null || undefined
      ? localStorage.getItem("theme")
      : "light"
  );
  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    type: "info",
  });
  function showSnackBar(message, type) {
    setSnackbar({
      show: true,
      message: message,
      type: type,
    });
  }
  // Storing theme to the user browser
  localStorage.setItem("theme", theme);
  console.log(newUser);

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
        showSnackBar,
        snackbar,
        loader,
        setLoader,
        setBuyTicketModel,
        buyTicketModel,
        newUser,
        setNewUser,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
