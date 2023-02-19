/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useStateContext } from "../../context/stateContext";
import "./Map.scss";
const Map = () => {
  const { theme, setSnackbar } = useStateContext();
  document.title = "E-Ticket | Maps";
  const [location, setLocation] = useState({
    longitude: "",
    latitude: "",
  });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    setSnackbar({
      show: true,
      type: "error",
      message: "Geolocation is not supported by this browser.",
    });
  }
  function showPosition(position) {
    // setLocation({
    //   ...location,
    //   latitude: 21.1888,
    //   longitude: 72.8293,
    // });
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }
  return (
    <div
      className={`guide-map-container ${theme === "light" ? "light" : "dark"}`}
    ></div>
  );
};

export default Map;
