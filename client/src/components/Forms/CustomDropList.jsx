import PropTypes from "prop-types";

export default function CustomDropList({ name, arr, register }) {
  return (
    <>
      <select {...register(name)} className="form__droplist">
        {arr.map((data) => (
          <option key={Math.random()} value={data}>
            {data}
          </option>
        ))}
      </select>
    </>
  );
}

CustomDropList.propTypes = {
  name: PropTypes.string,
  arr: PropTypes.array,
  register: PropTypes.func,
};
