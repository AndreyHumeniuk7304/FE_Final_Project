import { MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";

export default function CustomDropList({
  name,
  arr,
  camelizeDecode,
  handleChange,
  control,
}) {
  const nightMode = useSelector((state) => state.nightMode);
  return (
    <Controller
      render={({ field }) => (
        <Select
          onChange={handleChange}
          sx={{
            "& .MuiSelect-select": {
              backgroundColor: !nightMode ? "initial" : "#fff",
            },
          }}
          /* eslint-disable react/jsx-props-no-spreading */
          {...field}
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
      control={control}
      name={name}
      defaultValue={camelizeDecode(name)}
    />
  );
}

CustomDropList.propTypes = {
  name: PropTypes.string,
  arr: PropTypes.array,
  camelizeDecode: PropTypes.func,
  handleChange: PropTypes.func,
  control: PropTypes.object,
};
