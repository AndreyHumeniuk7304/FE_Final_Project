import { InputLabel, MenuItem, Select } from "@mui/material";
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
    <>
      <InputLabel sx={{ width: "150px" }}>{camelizeDecode(name)}:</InputLabel>

      <Controller
        control={control}
        name={name}
        render={({ field: { value, name, onChange } }) => (
          <Select
            variant="standard"
            onChange={(e) => {
              handleChange && handleChange(e);
              onChange(e);
            }}
            MenuProps={{ disableScrollLock: true }}
            value={value}
            sx={{
              flexGrow: "1",
              "& .MuiSelect-select": {
                color: !nightMode ? "#000" : "#fff",
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
  arr: PropTypes.array,
  camelizeDecode: PropTypes.func,
  handleChange: PropTypes.func,
  control: PropTypes.object,
};
