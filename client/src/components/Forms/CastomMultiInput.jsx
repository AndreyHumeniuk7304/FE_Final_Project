import { Box, Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
const CastomMultiInput = ({ inputName, index, fieldArray, control }) => {
  return (
    <>
      <Controller
        name={`${inputName}.${index}`}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            onChange={onChange}
            value={value}
            label={`Past url image #${index + 1}`}
            sx={{ width: "85%" }}
          />
        )}
      />
      <Button
        style={{ marginRight: 20 }}
        type="btn"
        onClick={(e) => {
          e.preventDefault();
          fieldArray.append([" "]);
        }}
      >
        ADD
      </Button>
      {index ? (
        <Button type="btn" onClick={() => fieldArray.remove(index)}>
          DEL
        </Button>
      ) : (
        ""
      )}
    </>
  );
};

export default CastomMultiInput;

CastomMultiInput.propTypes = {
  inputName: PropTypes.string,
  index: PropTypes.number,
  fieldArray: PropTypes.object,
  register: PropTypes.func,
  control: PropTypes.object,
};
