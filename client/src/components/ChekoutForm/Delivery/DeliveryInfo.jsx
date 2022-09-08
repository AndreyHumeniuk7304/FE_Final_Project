import { Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const DeliveryInfo = ({ currentMethod, handlChange }) => {
  const shippingMethod = useSelector((state) => state.shippingMethod);
  console.log(Object.keys(shippingMethod).length == 0);

  return (
    <>
      {!Object.keys(shippingMethod).length == 0 && (
        <Container>
          <Box>
            <div className="delivery-info">
              <Typography className="cost-value">
                Cost: {shippingMethod.currency}
                {shippingMethod.costValue}
              </Typography>
              <Typography>
                Free shipping on order: over {shippingMethod.currency}
                {shippingMethod.freeShippingOrderSum}
              </Typography>
              {/* <Typography>
              Shipping coutries: {shippingMethod.locations.country}
            </Typography> */}
              <Typography>Shipping period: {shippingMethod.period}</Typography>
            </div>
          </Box>
        </Container>
      )}
    </>
  );
};

DeliveryInfo.propTypes = {
  currentMethod: PropTypes.object,
  handlChange: PropTypes.func,
};

export default DeliveryInfo;
