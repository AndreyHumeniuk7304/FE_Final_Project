import { useState } from "react";
import PropTypes from "prop-types";
import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MaterialSlider = ({
  title,
  defaultValues,
  register,
  currentPrice,
  setCurrentPrice,
}) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <Box>
      <Typography
        p={1}
        fontWeight="bold"
        textTransform="uppercase"
        sx={{ cursor: "pointer" }}
        onClick={() => setIsShow(!isShow)}
      >
        Price
      </Typography>
      {isShow && (
        <>
          <Box pt={1}>
            <span>$</span> <span>{currentPrice[0]}</span>
            <span> - </span>
            <span>{currentPrice[1]}</span>
          </Box>
          <Slider
            defaultValue={defaultValues}
            /* eslint-disable react/jsx-props-no-spreading */
            {...register(title)}
            value={currentPrice}
            onChange={(e, v) => setCurrentPrice(v)}
            min={defaultValues[0]}
            max={defaultValues[1]}
          />
        </>
      )}
    </Box>
  );
};
export default MaterialSlider;

MaterialSlider.propTypes = {
  title: PropTypes.string,
  defaultValues: PropTypes.array,
  register: PropTypes.func,
  currentPrice: PropTypes.array,
  setCurrentPrice: PropTypes.func,
};
