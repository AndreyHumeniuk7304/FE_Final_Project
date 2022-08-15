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
    keys: ["mobile", "desktop"],
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    secondaryFontFamily: ["Josefin Sans"].join(","),
    h5: {
      color: "#000000",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "33px",
    },
  },
});

export default theme;
