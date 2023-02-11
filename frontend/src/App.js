import { Home, Sidebar } from "./container";
import { Route, Routes } from "react-router-dom";
import SnackbarAlert from "./components/snackar/Snackbar";
function App() {
  return (
    <>
      <div className="main-parent">
        <Sidebar />
        <Routes>
          <Route exact path="*" element={<Home />} />
        </Routes>

        <SnackbarAlert />
      </div>
    </>
  );
}

export default App;
