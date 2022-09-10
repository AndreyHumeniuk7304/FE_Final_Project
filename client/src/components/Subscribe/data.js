import * as yup from "yup";

export const productSchema = yup.object({
  email: yup.string().required("Email is required.").email(),
});

export const subscribeInputName = [
  {
    inputName: "email",
    formName: "email",
    formType: "input",
  },
];
export const defaultValues = {
  email: "",
  letterSubject:
    "You received this email because you were subscribed to the newsletter",
  letterHtml: "",
  enabled: true,
};
