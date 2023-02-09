import { Home, Sidebar } from "./container";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="main-parent">
        <Sidebar />
        <Routes>
          <Route exact path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
