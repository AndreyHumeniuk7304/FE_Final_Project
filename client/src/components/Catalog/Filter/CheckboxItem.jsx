import { FormLabel } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

const CheckboxItem = ({ itemName, title, register }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [nightMode, setNightMode] = useState(
    JSON.parse(localStorage.getItem("nightMode"))
  );

  return (
    <FormLabel
      className="checkbox__lable"
      style={{ textDecoration: isChecked ? "underline" : "none" }}
    >
      <input
        type="checkbox"
        name={title}
        value={itemName}
        defaultChecked={isChecked}
        className={"custom-checkbox"}
        onClick={(e) => {
          !isChecked
            ? setIsItemChecked([...isItemChecked, e.target.value])
            : setIsItemChecked(isItemChecked.filter((e) => e !== e));
        }}
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
  isItemChecked: PropTypes.array,
  setIsItemChecked: PropTypes.func,
  register: PropTypes.func,
};
