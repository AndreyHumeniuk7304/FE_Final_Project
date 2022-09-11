import { CircularProgress, FormLabel, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";

const CheckboxItem = ({
  itemName,
  title,
  register,
  isItemChecked,
  setIsItemChecked,
  itemCLicked,
  setIdemCliked,
}) => {
  const [isChecked, setIsChecked] = useState();

  useState(() => {
    setIsChecked(isItemChecked.includes(itemName.toLowerCase()));
  }, []);

  const { productsQuntityOnChange, isLoading } = useSelector(
    (state) => state.catalog.filterOnChange
  );

  const nightMode = useSelector((state) => state.nightMode);

  return (
    <Tooltip
      title={
        isLoading ? (
          <CircularProgress size={10} color="inherit" />
        ) : (
          `${productsQuntityOnChange}pc
            available`
        )
      }
      open={itemName === itemCLicked}
      placement={"right"}
    >
      <FormLabel
        className="checkbox__lable"
        style={{
          textDecoration: isChecked ? "underline" : "none",
          color: nightMode ? "#fff" : "#686868",
        }}
      >
        <input
          type="checkbox"
          name={title}
          value={itemName}
          defaultChecked={isChecked}
          className={"custom-checkbox"}
          onClick={(e) => {
            setIdemCliked(e.target.value);
            setIsChecked(!isChecked);

            !isChecked
              ? setIsItemChecked([
                  ...isItemChecked,
                  e.target.value.toLowerCase(),
                ])
              : setIsItemChecked(
                  isItemChecked.filter(
                    (el) => el.toLowerCase() !== e.target.value.toLowerCase()
                  )
                );
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
    </Tooltip>
  );
};

export default CheckboxItem;

CheckboxItem.propTypes = {
  itemName: PropTypes.string,
  title: PropTypes.string,
  isItemChecked: PropTypes.array,
  setIsItemChecked: PropTypes.func,
  register: PropTypes.func,
  itemCLicked: PropTypes.string,
  setIdemCliked: PropTypes.func,
};
