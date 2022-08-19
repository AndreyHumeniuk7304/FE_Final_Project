import PropTypes from "prop-types";

export default function CustomErrorMessage({ condition, errorText }) {
  return (
    <>
      {condition && (
        <span className="form__error" role="alert">
          {errorText}
        </span>
      )}
    </>
  );
}

CustomErrorMessage.propTypes = {
  condition: PropTypes.bool,
  errorText: PropTypes.string,
};
