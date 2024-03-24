import React, { useState } from "react";
import FlexCenter from "./muiComponents/FlexCenter";
import { Box} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BUTTON_FUNTION } from "../features/ButtonFilter/buttonsSlice";
import FilterListIcon from "@mui/icons-material/FilterList";
//import motion
import { motion } from "framer-motion";
import { BUTTONS_FILTER } from "../constants/buttonsFilter";

const MenuFilter = () => {
  //redux
  const dispach = useDispatch();
  const handleFilter = (value) => {
    dispach(BUTTON_FUNTION(value));
  };

  const [hangeButton, setHangeButton] = useState(false);
  const filterState = useSelector((state) => state.buttons);

  const handlefilter =(value)=>{
    setHangeButton(!hangeButton)
    dispach(BUTTON_FUNTION(value));
  }

  return (
    <motion.div initial={{ x: -200 }} animate={{ x: 0 }} exit={{ x: -200 }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "2rem",
        }}
      >
        {/* Button open-close */}
        <FlexCenter
          onClick={() => setHangeButton(!hangeButton)}
          sx={{
            backgroundColor: "primary.second",
            width: "7rem",
            borderRadius: 1,
            textTransform: "uppercase",
            fontSize: "0.8rem",
            fontWeight: "semibold",

            justifyContent: "space-between",
            cursor: "pointer",
            p: 1,
          }}
        >
          {filterState}
          <FilterListIcon fontSize={"small"} />
        </FlexCenter>

        {/* buttons */}
        <FlexCenter
          component={motion.div}
          sx={{
            backgroundColor: "primary.second",
            position: "absolute",
            width: "7rem",
            height: hangeButton ? "200px" : "0px",
            transition: "0.2s",
            animation: "ease-in-out",
            zIndex: 10,
            gap: 2,
            top: "7rem",
            justifyContent: "start",
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <FlexCenter
            sx={{
              position: "relative",
              flexDirection: "column",
              alignItems: "start",
              right: hangeButton ? "0px" : "200px",
              animation: "ease-in-out",
              transition: "0.2s",
              gap: 1,
              m: 1,
              width: 1,
              color: "primary.font",
            }}
          >
            {/* buttons */}
            {BUTTONS_FILTER.map((item, index) => {
              return (
                <FlexCenter
                  key={index}
                  onClick={() => handlefilter(`${item.value}`)}
                  sx={{
                    backgroundColor: "primary.dark",
                    width: 1,
                    borderRadius: 1,
                    height: "2em",
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.title}
                </FlexCenter>
              );
            })}
          </FlexCenter>
        </FlexCenter>
      </Box>
    </motion.div>
  );
};

export default MenuFilter;
