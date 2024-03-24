import React from "react";
// import componente the MUI
import { Box, Typography } from "@mui/material";
// import componente the MUI CUSTOMS
import FlexStart from "./muiComponents/FlexStart";
// import icons the MUI
import TuneIcon from "@mui/icons-material/Tune";
//import motion
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }} 
      exit={{ y: -100 }} 
    >
      <FlexStart
        sx={{
          p: 2,
          backgroundColor: "primary.main",
          justifyContent: "space-between",
          color: "primary.second",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Coffe Menu</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <TuneIcon style={{ fontSize: "1.5rem", fontWeight: "bold" }} />
        </Box>
      </FlexStart>
    </motion.div>
  );
};

export default Header;
