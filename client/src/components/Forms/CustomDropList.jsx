import { MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function CustomDropList({
  name,
  arr,
  register,
  camelizeDecode,
  handleChange,
}) {
  const nightMode = useSelector((state) => state.nightMode);
  return (
    <>
      <Select
        /* eslint-disable react/jsx-props-no-spreading */
        {...register(name)}
        defaultValue={camelizeDecode(name)}
        onChange={handleChange}
        sx={{
          "& .MuiSelect-select": {
            backgroundColor: !nightMode ? "initial" : "#fff",
          },
        }}
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
    </>
  );
}

CustomDropList.propTypes = {
  name: PropTypes.string,
  arr: PropTypes.array,
  register: PropTypes.func,
  camelizeDecode: PropTypes.func,
  handleChange: PropTypes.func,
};
