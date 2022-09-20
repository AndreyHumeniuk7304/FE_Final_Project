import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const CastomInput = ({ inputName, control, label, formType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return formType.toLowerCase() !== "password" ? (
    <Controller
      name={inputName}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField onChange={onChange} value={value} label={label} />
      )}
    />
  ) : (
    <Controller
      name={inputName}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          autoComplete="on"
          onChange={onChange}
          value={value}
          label="Some label"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
export default CastomInput;

CastomInput.propTypes = {
  control: PropTypes.object,
  inputName: PropTypes.string,
  label: PropTypes.string,
  formType: PropTypes.string,
};
