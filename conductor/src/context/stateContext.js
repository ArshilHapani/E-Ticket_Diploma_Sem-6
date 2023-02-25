import { useState, useContext, createContext } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
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
  return (
    <stateContext.Provider
      value={{
        loading,
        setLoading,
        snackbar,
        snackbarSetterFunction,
        setSnackbar,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
