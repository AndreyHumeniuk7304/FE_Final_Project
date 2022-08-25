import PropTypes from "prop-types";

export default function CustomInput({
  name,
  formName,
  register,
  formType,
  label,
}) {
  return (
    <>
      {formType !== "text" ? (
        <input
          placeholder={label ? "" : name}
          className={"form__input"}
          type={formType && formType}
          {...register(formName)}
          autoComplete={"off"}
        />
      ) : (
        <textarea
          placeholder={label ? "" : name}
          className={"form__input"}
          type={formType && formType}
          {...register(formName)}
          autoComplete={"off"}
        />
      )}
    </>
  );
}

CustomInput.propTypes = {
  name: PropTypes.string,
  formName: PropTypes.string,
  register: PropTypes.func,
  formType: PropTypes.string,
  label: PropTypes.string,
};
