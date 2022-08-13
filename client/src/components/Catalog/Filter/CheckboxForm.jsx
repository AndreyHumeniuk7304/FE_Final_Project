import { Box, FormLabel, Typography } from "@mui/material";
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
            return (
              <ol key={Math.random()}>
                <FormLabel
                  className="checkbox__lable"
                  // onClick={
                  //   (e) => console.log(event.currentTarget.style.color)
                  //   // event.currentTarget.checked
                  //   //   ? (event.currentTarget.style.display = "none")
                  //   //   : ""
                  // }
                >
                  <Field
                    type="checkbox"
                    name={title}
                    value={data}
                    className={"custom-checkbox"}
                  />
                  {title === "color" && (
                    <>
                      <span
                        className="checkbox__color"
                        style={{
                          backgroundColor: data === "steel" ? "silver" : data,
                        }}
                      ></span>
                    </>
                  )}{" "}
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
