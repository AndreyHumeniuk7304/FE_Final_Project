import { Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import CheckboxItem from "./CheckboxItem";

const CheckboxForm = ({ title, register, getFilterItem, search }) => {
  const [isShow, setIsShow] = useState(false);
  const [isItemChecked, setIsItemChecked] = useState([]);
  const [arr, setArr] = useState();

  useEffect(() => {
    setIsItemChecked([]);
    setIsItemChecked(search.getAll(title).join().split(","));
    setIsShow(false);
  }, [search.toString()]);

  return (
    <>
      <Typography
        className="checkbox__title"
        variant="h6"
        onClick={() => {
          setIsShow(!isShow);
          setArr(getFilterItem(title));
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
  getFilterItem: PropTypes.func,
  search: PropTypes.object,
  register: PropTypes.func,
};
