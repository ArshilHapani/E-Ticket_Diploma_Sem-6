import { useState, useContext, createContext, useEffect } from "react";
import usefetchUser from "../functions/usefetchUser";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
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
  }, [setUser, setSnackbar]);

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
