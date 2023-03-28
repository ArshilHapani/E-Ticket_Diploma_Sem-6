import { useState, useContext, createContext, useEffect } from "react";
import usefetchUser from "../functions/usefetchUser";
import { useNavigate } from "react-router-dom";

const stateContext = createContext();
export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    type: "info",
  });
  const snackbarSetterFunction = (message, type) => {
    setSnackbar({
      show: true,
      message: message,
      type: type,
    });
  };
  async function fetchUser() {
    setLoading(true);
    const data = await usefetchUser();
    setLoading(false);
    setUser(data);
  }
  useEffect(() => {
    fetchUser();
    if (
      localStorage.getItem("user") === null ||
      localStorage.getItem("user") === undefined
    ) {
      navigate("/signIn");
    }
  }, [navigate]);

  console.log(user);
  return (
    <stateContext.Provider
      value={{
        loading,
        setLoading,
        snackbar,
        snackbarSetterFunction,
        setSnackbar,
        user,
        setUser,
        fetchUser,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
