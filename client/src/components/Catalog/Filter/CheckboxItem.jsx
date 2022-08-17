import { FormLabel } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const CheckboxItem = ({ itemName, title, register }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <FormLabel
      className="checkbox__lable"
      style={{ textDecoration: isChecked ? "underline" : "none" }}
    >
      <input
        type="checkbox"
        name={title}
        value={itemName}
        className={"custom-checkbox"}
        onClick={(e) => setIsChecked(e.target.checked)}
        {...register(title)}
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
  register: PropTypes.func,
};
