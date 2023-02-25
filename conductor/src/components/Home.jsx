import { Box, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Home = () => {
  document.title = "E-Ticket | Conductor - Home";
  return (
    <Stack
      alignItems="center"
      gap={3}
      justifyContent="center"
      sx={{ height: "100vh" }}
      direction="column"
    >
      <Box display="flex" flexDirection="column" gap={3}>
        <Button variant="contained" color="primary">
          Transaction history
        </Button>
      </Box>
    </Stack>
  );
};

export default Home;
