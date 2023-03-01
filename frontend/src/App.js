import { Home } from "./container";
import { Route, Routes, useNavigate } from "react-router-dom";
import SnackbarAlert from "./components/snackbar/Snackbar";
import {
  ForgotPassword,
  Loader,
  NewUser,
  OldUser,
  PurchaseTicketModel,
} from "./components";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("user") === undefined ||
      localStorage.getItem("user") === null
    ) {
      navigate("/signUp");
      return;
    }
  }, [navigate]);
  return (
    <>
      <div className="main-parent">
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route exact path="/signUp" element={<NewUser />} />
          <Route exact path="/signIn" element={<OldUser />} />
          <Route exact path="/forgetPassword" element={<ForgotPassword />} />
        </Routes>
        <Loader />
        <SnackbarAlert />
        <PurchaseTicketModel />
      </div>
    </>
  );
}

export default App;
