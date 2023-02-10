import React from "react";
import { Slider } from "@mui/material";

//import { createTheme,colors, ThemeProvider } from '@mui/material';

// const theme = createTheme ({
//     slider: {
//         color: {
//       trackColor: "yellow",
//       selectionColor: "red"
//     }
// }
//   });

function valuetext(value: number) {
    return `${value}`;
  }

  const marks = [
    {
      value: 50,
      label: "1BTC = $3,406,069.54",
    },
];
const Slider1 = ()=>{
  return (
    // <ThemeProvider theme={theme}>

<Slider
orientation="vertical"
size="small"
defaultValue={50}
aria-label="amount"
valueLabelDisplay="auto"
getAriaValueText={valuetext}
step={10}
sx={{height:70,ml:6}}
marks={marks}
disabled
/>
// </MuiThemeProvider>

  );
}

export default Slider1;



