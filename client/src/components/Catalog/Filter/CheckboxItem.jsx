import { FormLabel } from "@mui/material";
import PropTypes from "prop-types";

const CheckboxItem = ({ itemName, title, register }) => {
  const setCheckedStyle = (e) => {
    e.target.checked &&
      (e.currentTarget.parentElement.style.textDecoration = "underline ");
    e.currentTarget.parentElement.style.textDecoration = "underline ";
    console.log(e.currentTarget.parentElement);
  };
  return (
    <FormLabel className="checkbox__lable">
      <input
        type="checkbox"
        name={title}
        value={itemName}
        className={"custom-checkbox"}
        onClick={setCheckedStyle}
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
