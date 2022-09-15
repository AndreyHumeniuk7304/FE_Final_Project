import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const RegistrationForOrder = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/my-account/entry", { replace: true });
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
        Ooopss...You must be registered to purchase
      </Typography>
      <Typography className="complete-order-container__placed">
        Please register!
      </Typography>
      <Button
        onClick={goToHomePage}
        className="complete-order-container__home-button"
      >
        Go to cabinet
      </Button>
    </Box>
  );
};

export default RegistrationForOrder;
