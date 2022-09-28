import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const CompleteOrder = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/", { replace: true });
  };

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "-15%",
      }}
    >
      <Typography
        sx={{
          fontSize: { mobile: "2.5vw", desktop: "3vw" },
        }}
      >
        Thanks for your order! You are welcome!
      </Typography>
      <Typography
        sx={{
          fontSize: { mobile: "2.5vw", desktop: "3vw" },
        }}
      >
        Your order is placed!
      </Typography>
      <Button
        onClick={goToHomePage}
        sx={{
          marginTop: "5%",
          fontSize: "1.5vw",
        }}
      >
        Go to home page
      </Button>
    </Box>
  );
};

export default CompleteOrder;
