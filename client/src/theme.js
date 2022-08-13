import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#847A7A",
      dark: "#000000",
    },
    secondary: {
      light: "#E2DFDF",
      main: "#847A7A",
      dark: "#595959",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 720,
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    secondaryFontFamily: ["Josefin Sans"].join(","),
  },
});

export default theme;
