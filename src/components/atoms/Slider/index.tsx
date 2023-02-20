import React, { useState } from "react";
import {Box, Slider} from "@mui/material";

  const marks = [
    {
      value: 1,
      label: "1BTC = $3,406,069.54",
    },
];
const Slider1 =() => {

  const [value, setvalue] =useState()
  const handleChange =(event: any, newValue: React.SetStateAction<any>) => {
    setvalue(newValue)
  }
  
  return (
      <><Slider
      orientation="vertical"
      size="small"
      min={0.1}
      max={2}
      defaultValue={0.0234510}
      step={0.005}
      value={value}
      onChange={handleChange}
      aria-label="amount"
      valueLabelDisplay="auto"
      // getAriaValueText={valuetext}
      sx={{ height: 70, ml: 6 }}
      marks={marks} /> 
      <Box>value:{value}</Box>
      </>

  );
}

export default Slider1;


