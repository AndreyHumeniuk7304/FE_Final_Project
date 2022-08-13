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
      main: "#C4C4C4",
      dark: "#595959",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 720,
      desktop: 1024,
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    secondaryFontFamily: ["Josefin Sans"].join(","),
    Roboto: ["Roboto", "sans-serif"].join(","),
  },
});

export default theme;
