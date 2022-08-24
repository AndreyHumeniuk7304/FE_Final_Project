import PropTypes from "prop-types";
import { Button } from "@mui/material";
import CustomInput from "../Forms/CastomInput";
import CustomErrorMessage from "../Forms/CustomErrorMessage";
import CustomDropList from "../Forms/CustomDropList";

const Form = ({
  actionWithForm,
  formArr,
  register,
  handleSubmit,
  errors,
  btnName,
}) => {
  const camelizeDecode = (str) => {
    const result = str.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  const renderFormType = ({
    inputName,
    formType,
    formName,
    label,
    className,
  }) => {
    switch (formType) {
      case "droplist": {
        return (
          <>
            {label && <label className="form__label">Select {label}:</label>}
            <CustomDropList
              name={inputName}
              arr={formName}
              register={register}
              camelizeDecode={camelizeDecode}
            />
          </>
        );
      }
      case "checkbox": {
        return (
          <>
            <label className={className && className}>
              <CustomInput
                register={register}
                formName={inputName}
                formType={"checkbox"}
                label={label}
              />
              {label}
            </label>
          </>
        );
      }

      default:
        return (
          <>
            {label && <label>Enter the {label}:</label>}
            <CustomInput
              register={register}
              name={camelizeDecode(inputName)}
              formName={inputName}
              formType={formType}
              label={label}
            />
            <CustomErrorMessage err={errors[inputName]?.message} />
          </>
        );
    }
  };

  return (
    <form
      onSubmit={handleSubmit((values) => actionWithForm(values))}
      className="form"
    >
      <ul className="form__box">
        {formArr.map((formData) => (
          <li className={"form__item"} key={formData.inputName}>
            {renderFormType(formData)}
          </li>
        ))}
      </ul>
      <div className="form__btn">
        <Button type="submit">{btnName}</Button>
      </div>
    </form>
  );
};

Form.propTypes = {
  actionWithForm: PropTypes.func,
  formArr: PropTypes.array,
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  btnName: PropTypes.string,
};

export default Form;
