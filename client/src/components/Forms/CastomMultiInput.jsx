import PropTypes from "prop-types";
const CastomMultiInput = ({ inputName, index, fieldArray, register }) => {
  return (
    <div className="form__input-add">
      <input
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...register(`${inputName}.${index}`)}
        type="text"
        className={"form__input"}
      />
      <button
        style={{ marginRight: 20 }}
        type="btn"
        onClick={(e) => {
          e.preventDefault();
          fieldArray.append([" "]);
        }}
      >
        ADD
      </button>
      {index ? (
        <button type="btn" onClick={() => fieldArray.remove(index)}>
          DEL
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default CastomMultiInput;

CastomMultiInput.propTypes = {
  inputName: PropTypes.string,
  index: PropTypes.number,
  fieldArray: PropTypes.object,
  register: PropTypes.func,
};
