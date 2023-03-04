import { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [homeTicketDetails, setHomeTicketDetails] = useState(false);
  const [buyTicketModel, setBuyTicketModel] = useState(false);
  const [loader, setLoader] = useState(false);
  const [newUser, setNewUser] = useState({
    uname: "",
    pwd: "",
    name: "",
    email: "",
    dob: "",
    mobile: "",
    balance: "",
    img: "",
  });
  localStorage.setItem("user_path", newUser.p_uname);
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
