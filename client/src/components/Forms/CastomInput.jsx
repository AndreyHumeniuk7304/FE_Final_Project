import PropTypes from "prop-types";

export default function CustomInput({
  name,
  formName,
  register,
  formType,
  label,
}) {
  const togglePassword = (e) => {
    let input = e.target.parentElement.children[0];
    input.type === "password"
      ? (input.type = "text") &&
        (e.target.src =
          "../images/eye_visible_hide_hidden_show_icon_145988.svg")
      : (input.type = "password") &&
        (e.target.src =
          "../images/eye_slash_visible_hide_hidden_show_icon_145987.svg");
  };
  return (
    <>
      {formType !== "text" ? (
        <div className="form__box">
          <input
            placeholder={label ? "" : name}
            className={"form__input"}
            type={formType && formType}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...register(formName)}
            autoComplete={"off"}
          />
          {formType === "password" && (
            <img
              className="form__show-password"
              src="../images/eye_slash_visible_hide_hidden_show_icon_145987.svg"
              alt="show password"
              onClick={togglePassword}
            />
          )}
        </div>
      ) : (
        <textarea
          placeholder={label ? "" : name}
          className={"form__input"}
          type={formType && formType}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
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
