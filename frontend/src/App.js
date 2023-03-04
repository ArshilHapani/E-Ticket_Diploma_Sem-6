import { Home } from "./container";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  useEffect(() => {
    if (
      localStorage.getItem("user") === null ||
      localStorage.getItem("user") === undefined
    ) {
      navigate("/signUp");
    }
    if (location.pathname === "/signIn") {
      navigate("/signIn");
    }
    if (location.pathname === "/forgetPassword") {
      navigate("/forgetPassword");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  return (
    <>
      <div className="main-parent">
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route
            exact
            path="/signUp"
            element={
              <div style={{ overFlowX: "hidden" }}>
                {" "}
                <NewUser />
              </div>
            }
          />
          <Route
            exact
            path="/signIn"
            element={
              <div style={{ overFlowX: "hidden" }}>
                {" "}
                <OldUser />
              </div>
            }
          />
          <Route
            exact
            path="/forgetPassword"
            element={
              <div style={{ overFlowX: "hidden" }}>
                {" "}
                <ForgotPassword />
              </div>
            }
          />
        </Routes>
        <Loader />
        <SnackbarAlert />
        <PurchaseTicketModel />
      </div>
    </>
  );
}

export default App;
