import React, { useState } from "react";
import PropTypes from "prop-types";
import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const MaterialSlider = ({
  title,
  defaultValues,
  register,
  currentPrice,
  setCurrentPrice,
}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <Box className="filter__slider">
      <Typography
        className="slider__title"
        variant="h6"
        onClick={() => setIsShow(!isShow)}
      >
        Price
      </Typography>
      {isShow && (
        <>
          <Box className="slider__title">
            <span>$</span> <span>{currentPrice[0]}</span>
            <span> - </span>
            <span>{currentPrice[1]}</span>
          </Box>
          <Slider
            className="slider__element"
            defaultValue={defaultValues}
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

MaterialSlider.propTypes = {
  title: PropTypes.string,
  defaultValues: PropTypes.array,
  register: PropTypes.func,
  currentPrice: PropTypes.array,
  setCurrentPrice: PropTypes.func,
};
