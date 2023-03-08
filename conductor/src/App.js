import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import OldUser from "./container/OldUser";
import ForgotPassword from "./container/ForgetPassword";
import SnackbarAlert from "./components/Snackbar";
import Layout from "./container/Layout";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Loader />
      <SnackbarAlert />
      <Routes>
        <Route exact path="/*" element={<Layout />} />
        <Route exact path="/signIn" element={<OldUser />} />
        <Route exact path="/forgetPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
