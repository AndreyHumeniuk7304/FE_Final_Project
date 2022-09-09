import { Box, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import theme from "../../../theme";

const DeliveryInfo = () => {
  const shippingMethod = useSelector((state) => state.shippingMethod);

  return (
    <>
      {!Object.keys(shippingMethod).length == 0 && (
        <Container sx={{ maxWidth: "500px", paddingBottom: "50px" }}>
          <Box>
            <Box
              sx={{
                width: "100px",
                height: "40px",
                margin: "0 auto",
                mb: "10px",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={shippingMethod.imgUrl}
                alt="logo"
              />
            </Box>
          </Box>
          <Box
            sx={{
              fontFamily: "fontFamily",
            }}
          >
            <Typography
              sx={{
                [theme.breakpoints.between("mobile", "tablet")]: {
                  fontSize: 16,
                },
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Cost: {shippingMethod.currency}
              {shippingMethod.costValue}
            </Typography>
            <Typography
              sx={{
                [theme.breakpoints.between("mobile", "tablet")]: {
                  fontSize: 14,
                },
                fontSize: 14,
              }}
            >
              Free shipping on order: over {shippingMethod.currency}
              {shippingMethod.freeShippingOrderSum}
            </Typography>
            <Typography
              sx={{
                [theme.breakpoints.between("mobile", "tablet")]: {
                  fontSize: 12,
                },
                fontSize: 16,
              }}
            >
              Shipping coutries: {shippingMethod.locations.country}
            </Typography>
            <Typography
              sx={{
                [theme.breakpoints.between("mobile", "tablet")]: {
                  fontSize: 12,
                },
                fontSize: 16,
              }}
            >
              Shipping period: {shippingMethod.period}
            </Typography>
          </Box>
        </Container>
      )}
    </>
  );
};

export default DeliveryInfo;
