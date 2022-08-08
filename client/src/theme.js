import { createTheme } from "@material-ui/core";

const theme = createTheme({
  pallete: {
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
      desktop: 1200,
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

export default theme;
