import { Home, Sidebar } from "./container";
import { Route, Routes } from "react-router-dom";
import SnackbarAlert from "./components/snackar/Snackbar";
import { Loader } from "./components";
function App() {
  return (
    <>
      <div className="main-parent">
        <Sidebar />
        <Routes>
          <Route exact path="*" element={<Home />} />
        </Routes>

        <SnackbarAlert />
        <Loader />
      </div>
    </>
  );
}

export default App;
