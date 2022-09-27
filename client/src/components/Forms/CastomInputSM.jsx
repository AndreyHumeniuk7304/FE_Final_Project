import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

const CastomInputSM = ({ inputName, control, label }) => {
  return (
    <Controller
      name={inputName}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          sx={{ width: "35%" }}
          autoComplete="off"
          variant="standard"
          color="secondary"
          onChange={onChange}
          value={value}
          label={label}
        />
      )}
    />
  );
};
export default CastomInputSM;

CastomInputSM.propTypes = {
  control: PropTypes.object,
  inputName: PropTypes.string,
  label: PropTypes.string,
  formType: PropTypes.string,
};
