import * as yup from "yup";
import "yup-phone";

export const loginInputNames = [
  {
    inputName: "loginOrEmail",
    formType: "input",
    label: "Login or Email",
  },
  {
    inputName: "password",
    formType: "password",
    label: "Password",
  },
  {
    inputName: "isSignedAutomatically",
    formType: "checkbox",
    label: "Keep me signed in",
    className: "entry__checkbox",
  },
];

export const registInputNames = [
  { inputName: "firstName", formType: "input", label: "First name" },
  { inputName: "lastName", formType: "input", label: "last name" },
  { inputName: "login", formType: "input", label: "Login" },
  { inputName: "email", formType: "input", label: "Email" },
  { inputName: "telephone", formType: "input", label: "Phone number" },
  { inputName: "gender", formName: ["Male", "Female"], formType: "droplist" },
  { inputName: "password", formType: "password", label: "Password" },
  {
    inputName: "confirmPassword",
    formType: "password",
    label: "Confirm password",
  },
];

export const registSchema = yup.object({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Second name is required."),
  login: yup
    .string()
    .required("Login is required.")
    .min(3, "Login is too short - should be 3 chars minimum.")
    .max(10, "Login is too long - should be 10 chars maximum."),
  email: yup.string().required("Email is required.").email("Email not valid"),
  telephone: yup
    .string()
    .required("Telephone is required.")
    .min(13, "Telephone is to short")
    .max(13, "Telephone is to long")
    .phone(),
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
