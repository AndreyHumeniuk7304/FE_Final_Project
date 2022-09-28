import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const CastomInput = ({ inputName, control, label, formType, theme }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return formType.toLowerCase() !== "password" ? (
    <Controller
      name={inputName}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          autoComplete="off"
          variant="standard"
          color="secondary"
          onChange={onChange}
          value={value}
          label={label}
          InputProps={{ disableUnderline: true }}
          sx={theme.input}
        />
      )}
    />
  ) : (
    <Controller
      name={inputName}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          autoComplete="off"
          onChange={onChange}
          value={value}
          label={label}
          variant="standard"
          type={showPassword ? "text" : "password"}
          sx={{ ...theme.root, ...theme.input }}
          InputProps={{
            disableUnderline: true,
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
  theme: PropTypes.object,
};
