import * as yup from "yup";
import "yup-phone";

export const loginInputNames = [
  { inputName: "loginOrEmail", formType: "input" },
  { inputName: "password", formType: "password" },
  {
    inputName: "isSignedAutomatically",
    formType: "checkbox",
    label: "Keep me signed in",
    className: "entry__checkbox",
  },
];

export const registInputNames = [
  { inputName: "firstName", formType: "input" },
  { inputName: "lastName", formType: "input" },
  { inputName: "login", formType: "input" },
  { inputName: "email", formType: "input" },
  { inputName: "telephone", formType: "input" },
  { inputName: "gender", formName: ["Male", "Female"], formType: "droplist" },
  { inputName: "password", formType: "password" },
  { inputName: "confirmPassword", formType: "password" },
];

export const registSchema = yup.object({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Second name is required."),
  login: yup
    .string()
    .required("Login is required.")
    .min(5, "Login is too short - should be 5 chars minimum."),
  email: yup.string().required("Email is required.").email("Email not valid"),
  telephone: yup.string().required("Telephone is required.").phone(),
  password: yup
    .string()
    .required("Password is required.")
    .max(30, "Password is too long - should be 30 chars maximum.")
    .min(7, "Password is too short - should be 7 chars minimum."),
  confirmPassword: yup
    .string()
    .required("Password is required.")
    .max(30, "Password is too long - should be 30 chars maximum.")
    .min(7, "Password is too short - should be 7 chars minimum.")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = yup.object({
  loginOrEmail: yup
    .string()
    .required("login/Email is required.")
    .min(5, "Login is too short - should be 5 chars minimum."),
  password: yup
    .string()
    .required("Password is required.")
    .max(30, "Password is too long - should be 30 chars maximum.")
    .min(7, "Password is too short - should be 7 chars minimum."),
});
