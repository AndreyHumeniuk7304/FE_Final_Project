import { InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { camelizeDecode } from "./functions";

export default function CustomDropList({
  name,
  arr,
  handleChange,
  control,
  label,
}) {
  const nightMode = useSelector((state) => state.nightMode);

  return (
    <>
      {label && (
        <InputLabel
          sx={{
            width: "fit-content",
            borderBottom: `1px solid ${!nightMode ? "#686868" : "#fff"}`,
          }}
        >
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
            MenuProps={{ disableScrollLock: true, disableUnderline: true }}
            value={value}
            sx={{
              textAlign: "center",
              "& .MuiSvgIcon-root": { color: !nightMode ? "#686868" : "#fff" },

              flexGrow: "1",
              borderBottom: `1px solid ${!nightMode ? "#686868" : "#fff"}`,
              "& .MuiSelect-select": {
                color: !nightMode ? "#686868" : "#fff",
              },
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
};
