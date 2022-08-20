import PropTypes from "prop-types";

export default function CustomErrorMessage({ err }) {
  return (
    <>
      <span className="form__error" role="alert">
        {err}
      </span>
    </>
  );
}

CustomErrorMessage.propTypes = {
  err: PropTypes.string,
};
