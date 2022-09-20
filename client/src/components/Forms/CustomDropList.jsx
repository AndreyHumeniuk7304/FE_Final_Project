import { MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";

export default function CustomDropList({
  name,
  arr,
  register,
  camelizeDecode,
  handleChange,
}) {
  return (
    <>
      <Select
        {...register(name)}
        defaultValue={camelizeDecode(name)}
        onChange={handleChange}
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
