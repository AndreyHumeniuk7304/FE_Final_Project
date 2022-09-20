import PropTypes from "prop-types";
import { Box, Button, Checkbox, InputLabel, List, Stack } from "@mui/material";

import CustomErrorMessage from "../Forms/CustomErrorMessage";
import CustomDropList from "../Forms/CustomDropList";
import CustomPaymantInput from "./CustomPaymantInput";
import CastomMultiInput from "./CastomMultiInput";
import { Controller } from "react-hook-form";
import CastomInput from "./CastomInput";
import { useSelector } from "react-redux";

const Form = ({
  actionWithForm,
  formArr,
  register,
  handleSubmit,
  handleChange,
  errors,
  btnName,
  fieldArray,
  control,
}) => {
  const camelizeDecode = (str) => {
    const result = str.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  };
  const nightMode = useSelector((state) => state.nightMode);

  const renderFormType = ({ inputName, formType, formName, label }) => {
    switch (formType) {
      case "droplist": {
        return (
          <Stack>
            <CustomDropList
              name={inputName}
              arr={formName}
              register={register}
              camelizeDecode={camelizeDecode}
              handleChange={handleChange}
            />
            <CustomErrorMessage err={errors[inputName]?.message} />
          </Stack>
        );
      }
      case "expiryDate": {
        return (
          <Stack>
            {label && <InputLabel>Enter the {label}:</InputLabel>}
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
          </Stack>
        );
      }
      case "checkbox": {
        return (
          <Stack>
            <InputLabel
              sx={{
                color: nightMode ? "#fff" : "initial",
                "& .MuiButtonBase-root": {
                  color: nightMode ? "#fff" : "initial",
                },
              }}
            >
              <Controller
                name={inputName}
                label={label}
                control={control}
                /* eslint-disable react/jsx-props-no-spreading */
                render={({ field }) => <Checkbox {...field} />}
              />
              {label}
            </InputLabel>
          </Stack>
        );
      }

      case "multiInput": {
        return (
          <Stack>
            <List>
              {fieldArray.fields.map((item, index) => {
                const err = errors[inputName];
                return (
                  <Box
                    component="ul"
                    key={item.id}
                    pt={1}
                    pb={1}
                    className="form__multi-input"
                  >
                    <CastomMultiInput
                      inputName={inputName}
                      index={index}
                      fieldArray={fieldArray}
                      register={register}
                      control={control}
                    />
                    <CustomErrorMessage err={err ? err[index]?.message : ""} />
                  </Box>
                );
              })}
            </List>
          </Stack>
        );
      }

      default:
        return (
          <Stack>
            <CastomInput
              inputName={inputName}
              control={control}
              label={label}
              formType={formType}
            />
            <CustomErrorMessage
              err={errors[inputName]?.message || errors[inputName]}
            />
          </Stack>
        );
    }
  };

  return (
    <form
      onSubmit={handleSubmit((values) => actionWithForm(values))}
      onChange={handleChange}
    >
      <Stack pt={2} pb={2} maxWidth={500} m="auto">
        <List>
          {formArr.map((formData) => (
            <Box key={formData.inputName} component="ul" pt={1} pb={1}>
              {renderFormType(formData)}
            </Box>
          ))}
        </List>
        <CustomErrorMessage err={errors.message} />

        <Button
          type="submit"
          sx={{ background: "#686868", height: 50, color: "#fff" }}
        >
          {btnName}
        </Button>
      </Stack>
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
  control: PropTypes.object,
};

export default Form;
