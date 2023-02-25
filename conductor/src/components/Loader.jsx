import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useStateContext } from "../context/stateContext";
const style = {
  zIndex: 999999999999,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
  loaderStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};
const Loader = () => {
  const { loading } = useStateContext();
  if (loading)
    return (
      <Box sx={style}>
        <CircularProgress sx={style.loaderStyle} />
      </Box>
    );
};

export default Loader;
