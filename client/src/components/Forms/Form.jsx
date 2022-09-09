import PropTypes from "prop-types";
import { Button } from "@mui/material";
import CustomInput from "../Forms/CastomInput";
import CustomErrorMessage from "../Forms/CustomErrorMessage";
import CustomDropList from "../Forms/CustomDropList";
import CustomPaymantInput from "./CustomPaymantInput";

const Form = ({
  actionWithForm,
  formArr,
  register,
  handleSubmit,
  handleChange,
  errors,
  btnName,
  fieldArray,
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
            <CustomErrorMessage err={errors[inputName]?.message} />
          </>
        );
      }
      case "expiryDate": {
        return (
          <>
            {label && <label className="form__label">Enter the {label}:</label>}
            <CustomPaymantInput
              register={register}
              name={camelizeDecode(inputName)}
              formName={inputName}
              formType={formType}
              label={label}
            />
            <CustomErrorMessage
              err={errors[inputName]?.message || errors[inputName]}
            />
          </>
        );
      }
      case "checkbox": {
        return (
          <>
            <label className={className ? className : "form__label"}>
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

      case "multiInput": {
        return (
          <ul>
            {fieldArray.fields.map((item, index) => {
              const err = errors[inputName];

              return (
                <li key={item.id}>
                  <div className="form__input-add">
                    <input
                      {...register(`${inputName}.${index}`)}
                      type="text"
                      className={"form__input"}
                    />
                    <button
                      style={{ marginRight: 20 }}
                      type="btn"
                      onClick={() => {
                        fieldArray.append([" "]);
                      }}
                    >
                      ADD
                    </button>
                    {index ? (
                      <button
                        type="btn"
                        onClick={() => fieldArray.remove(index)}
                      >
                        DEL
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                  <CustomErrorMessage err={err ? err[index]?.message : ""} />
                </li>
              );
            })}
          </ul>
        );
      }

      default:
        errors.isEmpty && console.log(errors);
        return (
          <>
            {label && <label className="form__label">Enter the {label}:</label>}
            <CustomInput
              register={register}
              name={camelizeDecode(inputName)}
              formName={inputName}
              formType={formType}
              label={label}
            />
            <CustomErrorMessage
              err={errors[inputName]?.message || errors[inputName]}
            />
          </>
        );
    }
  };

  return (
    <form
      onSubmit={handleSubmit((values) => actionWithForm(values))}
      onChange={handleChange}
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
  handleChange: PropTypes.func,
  errors: PropTypes.object,
  btnName: PropTypes.string,
  fieldArray: PropTypes.object,
};

export default Form;
