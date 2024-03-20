import React, { useEffect, useState } from "react";
//import component the MUI
import { Box, FormControl, Menu } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Filter = () => {
  const [value, setValue] = useState("Promos");
  const [age, setAge] = useState("");
  console.log(age);

  useEffect(() => {
    setAge(value);
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
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
          <MenuItem value={"Promos"}>Promos</MenuItem>
          <MenuItem value={"Combos"}>Combos</MenuItem>
          <MenuItem value={"Cafes"}>Cafes</MenuItem>
          <MenuItem value={"Dulces"}>Dulces</MenuItem>
          <MenuItem value={"Salados"}>Salados</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
