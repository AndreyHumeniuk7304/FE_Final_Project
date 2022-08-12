import { Box, Button, FormLabel, Input, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Field } from "formik";
import PropTypes from "prop-types";
import { useState } from "react";

const CheckboxForm = ({ title, arr }) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <Box className="checkbox">
      <Typography
        className="checkbox__title"
        variant="h6"
        onClick={() => setIsShow(!isShow)}
      >
        {title}
      </Typography>

      {isShow && (
        <Stack component="ul">
          {arr.map((data) => {
            const [isChecked, setIsChecked] = useState(false);
            return (
              <ol key={Math.random()}>
                <FormLabel
                  className="checkbox__lable"
                  style={isChecked ? { paddingLeft: 10 } : null}
                >
                  <Field
                    type="checkbox"
                    name={title}
                    value={data}
                    className={"custom-checkbox"}
                    onClick={() => setIsChecked(!isChecked)}
                  />
                  {data}
                </FormLabel>
              </ol>
            );
          })}
        </Stack>
      )}
    </Box>
  );
};

export default CheckboxForm;

CheckboxForm.propTypes = {
  title: PropTypes.string,
  arr: PropTypes.array,
  handleSubmit: PropTypes.func,
};
