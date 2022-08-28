import PropTypes from "prop-types";

export default function CustomDropList({
  name,
  arr,
  register,
  camelizeDecode,
}) {
  return (
    <>
      <select {...register(name)} className="form__droplist">
        <option value={name} disabled>
          {camelizeDecode(name)}
        </option>
        {arr.map((data) => (
          <option key={Math.random()} value={data}>
            {camelizeDecode(data)}
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
  camelizeDecode: PropTypes.func,
};
