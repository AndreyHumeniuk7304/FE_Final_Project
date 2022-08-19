import PropTypes from "prop-types";

export default function CustomInput({
  name,
  formName,
  register,
  formType,
  err,
}) {
  return (
    <>
      <input
        placeholder={name}
        className={"form__input"}
        type={formType && formType}
        {...register(formName, err)}
      />
    </>
  );
}

CustomInput.propTypes = {
  name: PropTypes.string,
  formName: PropTypes.string,
  register: PropTypes.func,
  formType: PropTypes.string,
  err: PropTypes.object,
};
