import {
  Checkbox,
  CircularProgress,
  FormLabel,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";

const CheckboxItem = ({
  itemName,
  title,
  register,
  arrOfCheckedItem,
  setArrOfCheckedItem,
  itemCLicked,
  setIdemCliked,
  categories,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  useState(() => {
    setIsChecked(arrOfCheckedItem.includes(itemName.toLowerCase()));
  }, [categories]);

  const { productsQuntityOnChange, isLoading } = useSelector(
    (state) => state.catalog.filterOnChange
  );

  const nightMode = useSelector((state) => state.nightMode);

  const toggleChecked = (e) => {
    setIdemCliked(e.target.value);
    !isChecked
      ? setArrOfCheckedItem([...arrOfCheckedItem, e.target.value.toLowerCase()])
      : setArrOfCheckedItem(
          arrOfCheckedItem.filter(
            (el) => el.toLowerCase() !== e.target.value.toLowerCase()
          )
        );
  };

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
      open={itemName.toLowerCase() === itemCLicked.toLowerCase()}
      placement={"right"}
    >
      <FormLabel
        style={{
          textDecoration: isChecked ? "underline" : "none",
          color: nightMode ? "#fff" : "#686868",
          cursor: "pointer",
        }}
      >
        <Checkbox
          name={title}
          value={itemName.toLowerCase()}
          sx={{
            display: "none",
          }}
          defaultChecked={isChecked}
          onClick={toggleChecked}
          /* eslint-disable react/jsx-props-no-spreading */
          {...register(title)}
        />
        {title === "color" && (
          <>
            <Typography
              component="span"
              style={{
                textTransform: "capitalize",
              }}
            ></Typography>
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
  arrOfCheckedItem: PropTypes.array,
  setArrOfCheckedItem: PropTypes.func,
  register: PropTypes.func,
  itemCLicked: PropTypes.string,
  setIdemCliked: PropTypes.func,
  categories: PropTypes.string,
};
