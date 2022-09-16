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
      }}
      className="complete-order-container"
    >
      <Typography className="complete-order-container__thanks">
        Thanks for your order! You are welcome!
      </Typography>
      <Typography className="complete-order-container__placed">
        Your order is placed!
      </Typography>
      <Button
        onClick={goToHomePage}
        className="complete-order-container__home-button"
      >
        Go to home page
      </Button>
    </Box>
  );
};

export default CompleteOrder;
