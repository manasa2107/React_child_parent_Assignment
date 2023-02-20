import { colors, createTheme, PaletteColorOptions } from "@mui/material";
//import { ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Palette {
        neutral?: PaletteColor
    }

    interface PaletteOptions {
        neutral?: PaletteColorOptions
    }

    interface SimplePaletteColorOptions {
        darker?: string 
    }

    interface PaletteColor {
        darker?:string
    }
}

const theme = createTheme ({
    palette: {
      secondary: {
        // main: colors.purple[900],
        main:"#651fff",
      },
      primary:{
        main:colors.blue[500],
      },
      neutral: {
        main: colors.grey[600],  
       },
    },
    typography: {
      h4: {
        fontFamily: "Helvetica",
        textTransform: "lowercase",
        fontSize:"5rem",
        fontWeight: 600,
        lineHeight: 2,
        color: "#000",
      },
      caption: {
         fontFamily:"Helvetica Neue",
      },
    },
  })
  export default theme;