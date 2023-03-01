import { Route, Routes } from "react-router-dom";
import BottomNavigationMenu from "./components/BottomNavigationMenu";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Profile from "./components/Profile";
import SnackbarAlert from "./components/Snackbar";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Loader />
      <SnackbarAlert />
      <BottomNavigationMenu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
