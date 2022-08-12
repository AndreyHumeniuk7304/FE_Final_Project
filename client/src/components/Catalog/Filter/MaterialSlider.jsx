import React from "react";
import { useField } from "formik";
import { Slider } from "@mui/material";
import PropTypes from "prop-types";

export const MaterialSlider = () => {
  // const [field, meta] = useField(props);
  //console.log(field);
  return (
    <Slider
      //getAriaLabel={() => "Minimum distance shift"}
      defaultValue={[0, 100]}
      // value={[5, 70]}
      // onChange={handleChange2}
      valueLabelDisplay="auto"
      //getAriaValueText={valuetext}
      disableSwap
    />
  );
};

// MaterialSlider.propTypes = {
//   label: PropTypes.string,
//   props: PropTypes.object,
// };
