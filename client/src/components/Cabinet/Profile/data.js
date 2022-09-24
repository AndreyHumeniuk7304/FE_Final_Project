import * as yup from "yup";
import "yup-phone";

// export const loginInputNames = [
//   {
//     inputName: "loginOrEmail",
//     formType: "input",
//   },
//   {
//     inputName: "password",
//     formType: "password",
//   },
//   {
//     inputName: "isSignedAutomatically",
//     formType: "checkbox",
//     label: "Keep me signed in",
//     className: "entry__checkbox",
//   },
// ];

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
  // { inputName: "password", formType: "password" },
  // { inputName: "confirmPassword", formType: "password" },
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
  // email: yup.string().required("Email is required.").email("Email not valid"),
  // password: yup
  //   .string()
  //   .required("Password is required.")
  //   .max(30, "Password is too long - should be 30 chars maximum.")
  //   .min(7, "Password is too short - should be 7 chars minimum."),
  // confirmPassword: yup
  //   .string()
  //   .required("Password is required.")
  //   .max(30, "Password is too long - should be 30 chars maximum.")
  //   .min(7, "Password is too short - should be 7 chars minimum.")
  //   .oneOf([yup.ref("password"), null], "Passwords must match"),
});

// export const customerSchema = yup.object({
//   loginOrEmail: yup
//     .string()
//     .required("login/Email is required.")
//     .min(5, "Login is too short - should be 5 chars minimum."),
//   password: yup
//     .string()
//     .required("Password is required.")
//     .max(30, "Password is too long - should be 30 chars maximum.")
//     .min(7, "Password is too short - should be 7 chars minimum."),
// });
