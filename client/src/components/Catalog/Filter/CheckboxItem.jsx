import { FormLabel } from "@mui/material";
import { Field, useField } from "formik";
import PropTypes from "prop-types";

const CheckboxItem = ({ itemName, title }) => {
  const setCheckedStyle = (e) => {
    e.target.checked &&
      (e.currentTarget.parentElement.style.textDecoration = "underline ");
    e.currentTarget.parentElement.style.textDecoration = "underline ";
    console.log(e.currentTarget.parentElement);
  };
  return (
    <FormLabel className="checkbox__lable">
      <Field
        type="checkbox"
        name={title}
        value={itemName}
        className={"custom-checkbox"}
        onClick={setCheckedStyle}
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
