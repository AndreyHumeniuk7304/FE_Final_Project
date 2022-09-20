import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";

const CastomInput = ({ inputName, control, label, formType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const nightMode = useSelector((state) => state.nightMode);

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
          sx={{
            "& .MuiSvgIcon-root": {
              fill: !nightMode ? "#000" : "#fff",
            },
          }}
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
