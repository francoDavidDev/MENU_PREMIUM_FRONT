import React, { useState } from "react";
import FlexCenter from "./muiComponents/FlexCenter";
import { Box, Button, Typography } from "@mui/material";
import FlexRight from "./muiComponents/FlexRight";
import { useDispatch, useSelector } from "react-redux";
import { BUTTON_FUNTION } from "../features/ButtonFilter/buttonsSlice";
import FilterListIcon from "@mui/icons-material/FilterList";
//import motion
import { motion } from "framer-motion";

export const BottonsFilter = () => {
  //redux
  const modalstate = useSelector((state) => state.buttons);
  const dispach = useDispatch();
  const handleFilter = (value) => {
    dispach(BUTTON_FUNTION(value));
  };

  return (
    <FlexCenter
      sx={{
        backgroundColor: "primary.second",
        position: "absolute",
        width: "7rem",
        zIndex: 10,
        gap: 2,
        top: "7rem",
        justifyContent: "start",
        borderRadius: 1,
        
      }}
    >
      <FlexCenter
        sx={{
          flexDirection: "column",
          alignItems: "start",
          gap: 1,
          m: 1,
          width: 1,
          color:'primary.font'
        }}
      >
        {/* buttons */}
        <FlexCenter
          onClick={() => handleFilter("promotions")}
          sx={{
            backgroundColor: "primary.dark",
            width: 1,
            borderRadius: 1,
            height: "2em",
            textTransform: "uppercase",
            fontSize: "0.9rem",
          }}
        >
          Promos
        </FlexCenter>
        <FlexCenter
          onClick={() => handleFilter("combos")}
          sx={{
            backgroundColor: "primary.dark",
            width: 1,
            borderRadius: 1,
            height: "2em",
            textTransform: "uppercase",
            fontSize: "0.9rem",
          }}
        >
          Combos
        </FlexCenter>

        <FlexCenter
          onClick={() => handleFilter("coffees")}
          sx={{
            backgroundColor: "primary.dark",
            width: 1,
            borderRadius: 1,
            height: "2em",
            textTransform: "uppercase",
            fontSize: "0.9rem",
          }}
        >
          Cafes
        </FlexCenter>

        <FlexCenter
          onClick={() => handleFilter("sweets")}
          sx={{
            backgroundColor: "primary.dark",
            width: 1,
            borderRadius: 1,
            height: "2em",
            textTransform: "uppercase",
            fontSize: "0.9rem",
          }}
        >
          Dulces
        </FlexCenter>
        <FlexCenter
          onClick={() => handleFilter("salty")}
          sx={{
            backgroundColor: "primary.dark",
            width: 1,
            borderRadius: 1,
            height: "2em",
            textTransform: "uppercase",
            fontSize: "0.9rem",
          }}
        >
          Salados
        </FlexCenter>
      </FlexCenter>
    </FlexCenter>
  );
};

const MenuFilter = () => {
  const filterState = useSelector((state) => state.buttons);
  const [changeButton, setChangeButton] = useState(false);

  return (
    <motion.div
    initial={{ x: -200 }}
      animate={{ x: 0 }} 
      exit={{ x: -200 }} >
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "2rem",
      }}
    >
      <FlexCenter
        onClick={() => setChangeButton(!changeButton)}
        sx={{
          backgroundColor: "primary.second",
          width: "7rem",
          borderRadius: 1,
          textTransform: "uppercase",
          fontSize: "0.8rem",
          fontWeight: "semibold",
          
          justifyContent: "space-between",
          cursor:'pointer',
          p:1
        }}
      >
        
        {filterState}
        <FilterListIcon  fontSize={'small'} />
      </FlexCenter>

      {changeButton ? <BottonsFilter /> : null}
    </Box>
    </motion.div>
  );
};

export default MenuFilter;
