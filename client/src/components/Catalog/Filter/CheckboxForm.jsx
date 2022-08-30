import { Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CheckboxItem from "./CheckboxItem";
import { getFilterItem } from "./filterFunctions";

const CheckboxForm = ({ title, register, search }) => {
  const [isShow, setIsShow] = useState(false);
  const [isItemChecked, setIsItemChecked] = useState([]);
  const [arr, setArr] = useState();

  useEffect(() => {
    setIsItemChecked([]);
    setIsItemChecked(search.getAll(title).join().split(","));
    setIsShow(false);
  }, [search.toString()]);

  const productList = useSelector(
    (state) => state.catalog.categorieProductList
  );

  return (
    <>
      <Typography
        className="checkbox__title"
        variant="h6"
        onClick={() => {
          setIsShow(!isShow);
          setArr(getFilterItem(title, productList));
        }}
      >
        {title}
      </Typography>

      {isShow && (
        <Stack component="ul">
          {arr.map((itemName) => (
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
  search: PropTypes.object,
  register: PropTypes.func,
};
