import { Box, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import CheckboxItem from "./CheckboxItem";

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
          {arr.map((itemName) => (
            <ol key={Math.random()}>
              <CheckboxItem itemName={itemName} title={title} />
            </ol>
          ))}
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
