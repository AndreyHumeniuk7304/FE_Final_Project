import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const CastomMultiInput = ({ inputName, index, fieldArray, control, theme }) => {
  return (
    <>
      <Controller
        name={`${inputName}.${index}`}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            InputProps={{ disableUnderline: true }}
            variant="standard"
            onChange={onChange}
            value={value}
            label={`Past url image #${index + 1}`}
            sx={{
              ...theme.input,
              flex: "1",
            }}
          />
        )}
      />

      {index ? (
        <Button sx={theme.btn} onClick={() => fieldArray.remove(index)}>
          DEL
        </Button>
      ) : (
        ""
      )}
      <Button sx={theme.btn} onClick={() => fieldArray.append([" "])}>
        ADD
      </Button>
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
  theme: PropTypes.object,
};
