import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";
import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const MaterialSlider = ({ label, title, min, max, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <Box className="filter__slider">
      <Typography className="slider__title" variant="h6">
        {title}
      </Typography>
      <Box className="slider__title">
        <span>$</span> <span>{min}</span>
        <span> - </span>
        <span>{max}</span>
      </Box>
      <Slider
        className="slider__element"
        {...field}
        {...props}
        aria-labelledby={field.id}
        onBlur={(e) => helpers.setTouched(e)}
        onChange={(e, v) => helpers.setValue(v)}
      />
    </Box>
  );
};

MaterialSlider.propTypes = {
  props: PropTypes.object,
  field: PropTypes.object,
  label: PropTypes.object,
  title: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};
