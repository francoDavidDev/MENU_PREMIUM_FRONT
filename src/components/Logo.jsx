import React from "react";
// import componente the MUI
import { Box, Typography } from "@mui/material";
// import componente the MUI CUSTOMS
import FlexStart from "./muiComponents/FlexStart";
// import icons the MUI
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";

const Logo = () => {
  return (
    <FlexStart
      sx={{ p: 2, background: "red", justifyContent: "space-between" }}
    >
      <Typography color={"primary.dark"} sx={{ fontWeight: "bold" }}>
        Coffe Menu
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <SearchIcon style={{ fontSize: "1.5rem", fontWeight: "bold" }} />
        <TuneIcon style={{ fontSize: "1.5rem", fontWeight: "bold" }} />
      </Box>
    </FlexStart>
  );
};

export default Logo;
