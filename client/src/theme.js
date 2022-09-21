import { createTheme, createStyles } from "@mui/material/styles";

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
    keys: ["mobile", "desktop"],
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    secondaryFontFamily: ["Josefin Sans", "sans-serif"].join(","),
    Roboto: ["Roboto", "sans-serif"].join(","),
    h5: {
      color: "#000000",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "33px",
    },
  },
});

// export const useStyles = makeStyles(() => ({
//   Typography: {
//     fontFamily: "Open Sans",
//     fontStyle: "normal",
//     fontWeight: "700",
//     fontSize: "14px",
//     lineHeight: "19px",
//     "&:after": {
//       content: "''",
//       display: "block",
//       height: "1px",
//       width: "80%",
//       marginTop: "21px",
//       marginBottom: "32px",
//       backgroundColor: rgba(130, 128, 128, 1),
//     },
//   },
// }));

export const styles = () =>
  createStyles({
    h: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "19px",
      "&:after": {
        content: "''",
        display: "block",
        height: "1px",
        width: "80%",
        marginTop: "21px",
        marginBottom: "32px",
        backgroundColor: "rgba(130, 128, 128, 1)",
      },
    },
  });

export default theme;
