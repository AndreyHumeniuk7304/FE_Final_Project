import React, { useState } from "react";
import PropTypes from "prop-types";
import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import classNames from "classnames";
import { useSelector } from "react-redux";

export const MaterialSlider = ({
  title,
  defaultValues,
  register,
  currentPrice,
  setCurrentPrice,
}) => {
  const [isShow, setIsShow] = useState(false);
  const nightMode = useSelector((state) => state.nightMode);
  const sliderClasses = classNames(
    {
      "slider__element--black": !nightMode,
    },
    {
      "slider__element--white": nightMode,
    }
  );

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
            className={sliderClasses}
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
