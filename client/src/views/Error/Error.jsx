import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Error = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: { mobile: "17%", desktop: "0%" },
        flexDirection: { mobile: "column", desktop: "row" },
        height: "55vw",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { mobile: "3vw", desktop: "2vw" },
        }}
      >
        Ooops...! Page not found...
      </Typography>
      <Box
        component="img"
        sx={{
          maxWidth: "60%",
          height: "auto",
        }}
        alt="error"
        src="../images/error.png"
      />
    </Box>
  );
};

export default Error;
