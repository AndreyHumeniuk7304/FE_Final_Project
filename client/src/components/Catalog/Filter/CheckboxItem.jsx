import { FormLabel } from "@mui/material";
import { Field } from "formik";
import PropTypes from "prop-types";
import { useState } from "react";

const CheckboxItem = ({ itemName, title }) => {
  return (
    <FormLabel
      className="checkbox__lable"
      // style={{ textDecoration: isChecked ? "underline" : "none" }}
    >
      <Field
        type="checkbox"
        name={title}
        value={itemName}
        className={"custom-checkbox"}
      />
      {title === "color" && (
        <>
          <span
            className="checkbox__color"
            style={{
              backgroundColor: itemName === "steel" ? "silver" : itemName,
            }}
          ></span>
        </>
      )}
      {itemName}
    </FormLabel>
  );
};

export default CheckboxItem;

CheckboxItem.propTypes = {
  itemName: PropTypes.string,
  title: PropTypes.string,
  values: PropTypes.object,
};
