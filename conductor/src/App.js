import { Route, Routes } from "react-router-dom";
import BottomNavigationMenu from "./components/BottomNavigationMenu";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Scan from "./components/Scan";

function App() {
  return (
    <div>
      <BottomNavigationMenu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/scan" element={<Scan />} />
      </Routes>
    </div>
  );
}

export default App;
