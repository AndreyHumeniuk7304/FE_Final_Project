import { FormLabel } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";

const CheckboxItem = ({ itemName, title, register }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [nightMode, setNightMode] = useState(
    JSON.parse(localStorage.getItem("nightMode"))
  );

  return (
    <FormLabel
      className="checkbox__lable"
      style={{
        textDecoration: isChecked ? "underline" : "none",
        color: nightMode ? "#fff" : "#000",
      }}
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
