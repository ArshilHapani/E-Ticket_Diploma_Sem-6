import { useState, useContext, createContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [buyTicketModel, setBuyTicketModel] = useState(false);
  const [toggleSync, setToggleSync] = useState(true);
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
  useEffect(() => {
    if (
      localStorage.getItem("user") === null ||
      localStorage.getItem("user") === undefined
    ) {
      navigate("/signIn");
    }
    if (
      newUser.p_name === undefined ||
      newUser.p_name === "" ||
      newUser.p_name === null ||
      newUser.p_uname === undefined ||
      newUser.p_uname === "" ||
      newUser.p_uname === null ||
      newUser.p_email === undefined ||
      newUser.p_email === "" ||
      newUser.p_email === null
    ) {
      navigate("/signIn");
    }
    if (location.pathname === "/signUp") {
      navigate("/signUp");
    }
    if (location.pathname === "/getStarted") {
      navigate("/getStarted");
    }
    if (location.pathname === "/forgetPassword") {
      navigate("/forgetPassword");
    }
  }, [
    location.pathname,
    navigate,
    newUser.p_email,
    newUser.p_name,
    newUser.p_uname,
  ]);
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
        toggleSync,
        setToggleSync,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
