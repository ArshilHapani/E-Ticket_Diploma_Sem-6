import { useState, useContext, createContext } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarMenu, setSidebarMenu] = useState(false);
  return (
    <stateContext.Provider
      value={{
        sidebarMenu,
        setSidebarMenu,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
