import { Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CheckboxItem from "./CheckboxItem";
import { filterCategoriesItem } from "./data";
//import { getFilterItem } from "./filterFunctions";

const CheckboxForm = ({ title, register, isItemChecked, setIsItemChecked }) => {
  const [isShow, setIsShow] = useState(false);
  //const [arr, setArr] = useState();
  const productList = useSelector(
    (state) => state.catalog.categorieProductList
  );

  useEffect(() => {
    setIsShow(false);
    // setArr(getFilterItem(title, productList));
  }, [productList]);

  return (
    <>
      <Typography
        className="checkbox__title"
        variant="h6"
        onClick={() => {
          setIsShow(!isShow);
          // setArr(getFilterItem(title, productList));
        }}
      >
        {title}
      </Typography>

      {isShow && (
        <Stack component="ul">
          {filterCategoriesItem[title].map((itemName) => (
            <ol key={Math.random()}>
              <CheckboxItem
                itemName={itemName}
                title={title}
                register={register}
                isItemChecked={isItemChecked}
                setIsItemChecked={setIsItemChecked}
              />
            </ol>
          ))}
        </Stack>
      )}
    </>
  );
};

export default CheckboxForm;

CheckboxForm.propTypes = {
  title: PropTypes.string,
  register: PropTypes.func,
  isItemChecked: PropTypes.array,
  setIsItemChecked: PropTypes.func,
};
