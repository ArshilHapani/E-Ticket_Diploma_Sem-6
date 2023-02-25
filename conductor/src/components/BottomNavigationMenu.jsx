import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { AiOutlineHome, AiOutlineScan } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
const BottomNavigationMenu = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/profile") {
      setValue(2);
    } else if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname === "/scan") {
      setValue(1);
    }
  }, [location]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<AiOutlineHome size={25} />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label="Scan"
          icon={<AiOutlineScan size={25} />}
          onClick={() => navigate("/scan")}
        />

        <BottomNavigationAction
          label="Profile"
          icon={<BsPerson size={25} />}
          onClick={() => navigate("/profile")}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationMenu;
