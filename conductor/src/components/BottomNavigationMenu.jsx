import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { AiOutlineHome, AiOutlineScan } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const BottomNavigationMenu = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
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
          label="Profile"
          icon={<BsPerson size={25} />}
          onClick={() => navigate("/profile")}
        />
        <BottomNavigationAction
          label="Home"
          icon={<AiOutlineHome size={25} />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<AiOutlineScan size={25} />}
          onClick={() => navigate("/scan")}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationMenu;
