import { Home, Sidebar } from "./container";
import "animate.css";
function App() {
  return (
    <>
      <div className="main-parent">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
