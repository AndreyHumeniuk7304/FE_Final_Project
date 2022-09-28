import * as yup from "yup";
import "yup-phone";

export const customerInputNames = [
  {
    inputName: "firstName",
    value: "1",
    formType: "input",
    label: "First name",
  },
  { inputName: "lastName", formType: "input", label: "First name" },
  // { inputName: "email", formType: "input" },
  { inputName: "telephone", formType: "input", label: "Phone number" },
  {
    inputName: "gender",
    formName: ["Male", "Female"],
    formType: "droplist",
    label: "Gender",
  },
  { inputName: "birthday", formType: "date", label: "Birthday" },
  { inputName: "password", formType: "password", label: "password" },
  {
    inputName: "newPassword",
    formType: "password",
    label: "new password",
  },
];

export const customerSchema = yup.object({
  firstName: yup
    .string()
    .max(15, "Too Long!")
    .required("First name is required."),
  lastName: yup
    .string()
    .max(15, "Too Long!")
    .required("Second name is required."),
  telephone: yup.string().required("Telephone is required.").phone(),
  birthday: yup.date().default(() => new Date()),
});
