// styles/theme.js
import { createTheme } from "@mui/material/styles";

const colors = {
  black: "#030303",
  green: "#10A267",
  yellow: "#FEC901",
  teal: "#009292",
  purple: "#B287FD",
  sand: "#FFDCA8", 
  white: "#FFFFFF",
  hoverGray: "#D3CFCF",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.green,
    },
    secondary: {
      main: colors.purple,
    },
    black: {
      main: colors.black,
    },
    white: {
      main: colors.white,
    },
    error: {
      main: colors.teal,
    },
    sand: {
      main: colors.sand,
    },
    text: {
      primary: colors.black,
      secondary: colors.hoverGray,
    },
  },
  typography: {
    h1: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontWeight: 400,
      letterSpacing: "-0.86px",
      lineHeight: "normal",
    },
    h2: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontSize: "30px",
      fontWeight: 400,
      lineHeight: "normal",
    },
    h3: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "normal",
    },
    // ... Customize other variants like h3, h4, h5, h6, subtitle1, subtitle2, etc.
  },
});

export default theme;
