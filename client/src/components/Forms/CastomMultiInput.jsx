import { Box, Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";
const CastomMultiInput = ({ inputName, index, fieldArray, control }) => {
  const nightMode = useSelector((state) => state.nightMode);
  console.log(fieldArray);
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
            sx={{
              width: "70%",
              "& .MuiInputBase-root": {
                backgroundColor: !nightMode ? "initial" : "#fff",
              },
              "& .MuiInputBase-input": {
                color: nightMode ? "#000" : "initial",
              },
            }}
          />
        )}
      />

      {index ? (
        <Button
          sx={{ backgroundColor: "#686868", color: "#fff" }}
          onClick={() => fieldArray.remove(index)}
        >
          DEL
        </Button>
      ) : (
        ""
      )}
      <Button
        sx={{ backgroundColor: "#686868", color: "#fff" }}
        onClick={() => fieldArray.append([" "])}
      >
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
};
