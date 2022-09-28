import PropTypes from "prop-types";
import { Box, Button, Checkbox, InputLabel, List, Stack } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import CustomErrorMessage from "../Forms/CustomErrorMessage";
import CustomDropList from "../Forms/CustomDropList";
import CastomInputSM from "./CastomInputSM";
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
  const nightMode = useSelector((state) => state.nightMode);
  const theme = createTheme({
    root: {
      color: !nightMode ? "#686868" : "#fff",
      background: "inherit",
      "& .MuiSvgIcon-root": {
        fill: !nightMode ? "#686868" : "#fff",
      },
      "& .MuiButtonBase-root": {
        color: nightMode ? "#fff" : "#686868",
      },
    },
    input: { borderBottom: `1px solid ${!nightMode ? "#686868" : "#fff"}` },
    btn: { background: "#686868", height: 50, color: "#fff" },
  });

  const renderFormType = ({ inputName, formType, formName, label }) => {
    switch (formType) {
      case "droplist": {
        return (
          <Stack
            direction="row"
            justifyContent="space-between"
            pt={2}
            alignItems="flex-end"
          >
            <CustomDropList
              name={inputName}
              arr={formName}
              register={register}
              handleChange={handleChange}
              control={control}
              label={label}
              theme={theme}
            />
            <CustomErrorMessage err={errors[inputName]?.message} />
          </Stack>
        );
      }
      case "inputSM": {
        return (
          <Stack>
            <InputLabel sx={{ "& .MuiButtonBase-root": { color: "white" } }}>
              <CastomInputSM
                inputName={inputName}
                control={control}
                label={label}
                formType={formType}
              />
              <CustomErrorMessage
                err={errors[inputName]?.message || errors[inputName]}
              />
            </InputLabel>
          </Stack>
        );
      }
      case "checkbox": {
        return (
          <Stack>
            <InputLabel sx={theme.root}>
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
                  <Stack
                    component="li"
                    key={item.id}
                    pt={1}
                    pb={1}
                    direction="row"
                    justifyContent="space-between"
                    spacing={4}
                  >
                    <CastomMultiInput
                      inputName={inputName}
                      index={index}
                      fieldArray={fieldArray}
                      register={register}
                      control={control}
                      theme={theme}
                    />
                    <CustomErrorMessage err={err ? err[index]?.message : ""} />
                  </Stack>
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
              theme={theme}
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
      <Stack
        pt={5}
        pb={5}
        maxWidth={500}
        minwidth={{ mobile: 320, desktop: 320 }}
        m="auto"
      >
        <List>
          {formArr.map((formData) => (
            <Box key={formData.inputName} component="li" pt={1} pb={1}>
              {renderFormType(formData)}
            </Box>
          ))}
        </List>
        <CustomErrorMessage err={errors.message} />

        {btnName && (
          <Button type="submit" sx={theme.btn}>
            {btnName}
          </Button>
        )}
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
