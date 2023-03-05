import React, { useState } from "react";
import { useStateContext } from "../../context/stateContext";
import "./Map.scss";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { Box, Stack } from "@mui/system";
import img1 from "../../assets/map1.jpg";
import img2 from "../../assets/map2.jpg";
import { Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GuideMap = () => {
  const navigate = useNavigate();
  if (
    localStorage.getItem("user") === null ||
    localStorage.getItem("user") === undefined
  ) {
    navigate("/signUp");
  }
  document.title = "E-Ticket | Maps";
  const { theme, showSnackBar } = useStateContext();
  const [location, setLocation] = useState({
    longitude: "",
    latitude: "",
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    showSnackBar("Geolocation is not supported by this browser.", "error");
  }
  function showPosition(position) {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }
  // if (!isLoaded) return setLoader(true);
  return (
    <div
      className={`guide-map-container ${theme === "light" ? "light" : "dark"}`}
    >
      <Box
        sx={{
          width: "100%",
          "&:hover": { boxShadow: "0 0 25px rgba(0,0,0,0.4)" },
        }}
      >
        <Map
          height={300}
          defaultCenter={[location.latitude, location.longitude]}
          defaultZoom={15}
          center={[location.latitude, location.longitude]}
        >
          <ZoomControl />
          <Marker width={50} anchor={[location.latitude, location.longitude]} />
        </Map>
        <Stack direction="column" sx={{ padding: "5px 10px" }}>
          <Typography fontSize={10} fontWeight={500}>
            Latitude:{location.latitude}
          </Typography>
          <Typography fontSize={10} fontWeight={500}>
            Longitude:{location.longitude}
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <Stack
        marginTop={5}
        sx={{ width: "100%", border: "2px solid rgba(255,255,255,0.5)" }}
      >
        <Typography
          align="center"
          fontSize={20}
          fontWeight={700}
          sx={{ margin: "40px 0" }}
        >
          City Bus Route Map
        </Typography>
        <a href={img1} target="_blank" rel="noreferrer">
          <img src={img1} alt="proto-map-1" className="proto-image" />
        </a>
        <Divider />
        <Typography
          align="center"
          fontSize={20}
          fontWeight={700}
          sx={{ margin: "40px 0" }}
        >
          Bus stop map guide From Surat Airport to Sarthana Jakatnaka
        </Typography>
        <a href={img2} target="_blank" rel="noreferrer">
          <img src={img2} alt="proto-map-2" className="proto-image" />
        </a>
      </Stack>
    </div>
  );
};

export default GuideMap;
