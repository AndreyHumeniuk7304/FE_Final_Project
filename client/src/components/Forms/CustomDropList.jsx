import { InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { camelizeDecode } from "./functions";

export default function CustomDropList({
  name,
  arr,
  handleChange,
  control,
  label,
  theme,
}) {
  return (
    <>
      {label && (
        <InputLabel width="fit-content" sx={theme.input}>
          {label}
        </InputLabel>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, name, onChange } }) => (
          <Select
            disableUnderline
            variant="standard"
            onChange={(e) => {
              handleChange && handleChange(e);
              onChange(e);
            }}
            MenuProps={{ disableScrollLock: true }}
            value={value}
            sx={{
              textAlign: "center",
              flexGrow: "1",
              ...theme.root,
              ...theme.input,
            }}
            /* eslint-disable react/jsx-props-no-spreading */

            control={control}
          >
            <MenuItem disabled value={camelizeDecode(name)}>
              {camelizeDecode(name)}
            </MenuItem>
            {arr.map((data) => (
              <MenuItem key={Math.random()} value={data}>
                {camelizeDecode(data)}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </>
  );
}

CustomDropList.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  arr: PropTypes.array,
  handleChange: PropTypes.func,
  control: PropTypes.object,
  theme: PropTypes.object,
};
