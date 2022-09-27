import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";

const CastomMultiInput = ({ inputName, index, fieldArray, control }) => {
  const nightMode = useSelector((state) => state.nightMode);
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
              borderBottom: `1px solid ${!nightMode ? "#686868" : "#fff"}`,
              flex: "1",
            }}
          />
        )}
      />

      {index ? (
        <Button
          sx={{ backgroundColor: "#686868", color: "#fff", width: 60 }}
          onClick={() => fieldArray.remove(index)}
        >
          DEL
        </Button>
      ) : (
        ""
      )}
      <Button
        sx={{ backgroundColor: "#686868", color: "#fff", width: 60 }}
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
