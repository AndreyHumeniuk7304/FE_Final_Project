import { Box, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import CheckboxItem from "./CheckboxItem";

const CheckboxForm = ({ title, register, getFilterItem }) => {
  const [isShow, setIsShow] = useState(false);
  const [arr, setArr] = useState();
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
  handleSubmit: PropTypes.func,
  register: PropTypes.func,
};
