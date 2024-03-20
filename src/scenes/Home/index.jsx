import React, { useState, useEffect } from "react";
// import Motion
import { motion } from "framer-motion";
//import component the MUI
import { Box, CardMedia, FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import componentes
import Carrousel from "../../components/Carrousel";
import Products from "../../components/Products";
import Logo from "../../components/Logo";
import BannersMain from "../../components/BannersMain";

const Home = () => {
  const [value, setValue] = useState("coffees");
  const [age, setAge] = useState("");
  console.log(age);

  useEffect(() => {
    setAge(value);
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Logo />
      <motion.div
        mode="wait"
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        animate={{
          opacity: [0, 1],
        }}
        exit={{
          opacity: [1, 0],
          transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
        }}
      >
        {/* Filter */}
        <Box sx={{ p: 2, background: "blue" }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Filtro</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"promotions"}>Promos</MenuItem>
              <MenuItem value={"combos"}>Combos</MenuItem>
              <MenuItem value={"coffees"}>Cafes</MenuItem>
              <MenuItem value={"sweets"}>Dulces</MenuItem>
              <MenuItem value={"salty"}>Salados</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Carrousel value={value} />
        <BannersMain value={value} />
        {value === "coffees"  || value === "sweets" || value === "salty" ? (
          <Products value={value} />
        ) : null}
      </motion.div>
    </>
  );
};

export default Home;
