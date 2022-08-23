import { FormLabel } from "@mui/material";
import PropTypes from "prop-types";

const CheckboxItem = ({
  itemName,
  title,
  register,
  isItemChecked,
  setIsItemChecked,
}) => {
  return (
    <FormLabel
      className="checkbox__lable"
      style={{
        textDecoration: isItemChecked.includes(itemName) ? "underline" : "none",
      }}
    >
      <input
        type="checkbox"
        name={title}
        value={itemName}
        defaultChecked={isItemChecked.includes(itemName)}
        className={"custom-checkbox"}
        onClick={(e) => {
          setIsItemChecked([...isItemChecked, e.target.value]);
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
