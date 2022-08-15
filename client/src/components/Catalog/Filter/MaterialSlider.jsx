import React, { useState } from "react";
import PropTypes from "prop-types";
import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const MaterialSlider = ({ label, title, defaultValues, register }) => {
  const [currentPrice, setCurrentPrice] = useState(defaultValues);
  return (
    <Box className="filter__slider">
      <Typography className="slider__title" variant="h6">
        {title}
      </Typography>
      <Box className="slider__title">
        <span>$</span> <span>{currentPrice[0]}</span>
        <span> - </span>
        <span>{currentPrice[1]}</span>
      </Box>
      <Slider
        className="slider__element"
        defaultValue={defaultValues}
        {...register(title)}
        onChange={(e, v) => setCurrentPrice(v)}
        min={defaultValues[0]}
        max={defaultValues[1]}
      />
    </Box>
  );
};

MaterialSlider.propTypes = {
  props: PropTypes.object,
  field: PropTypes.object,
  label: PropTypes.object,
  title: PropTypes.string,
  defaultValues: PropTypes.array,
  register: PropTypes.func,
};
