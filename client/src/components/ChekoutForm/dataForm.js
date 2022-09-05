import { object, string, number } from "yup";

export const checkoutInputNames = [
  { inputName: "cardNumber", formType: "input", label: "Card Number" },
  {
    inputName: "cardHolderName",
    formType: "input",
    label: "Card Holder Name",
    className: "entry__checkbox",
  },
  {
    inputName: "cardExpiryDate",
    formType: "expiryDate",
    label: "Card Expiry Date",
  },
  { inputName: "cvv", formType: "input", label: "CVC/CVV/CID" },
];

export const checkoutSchema = object({
  cardNumber: number()
    .typeError("Enter the value in number type")
    .required("It's a required field"),
  cardHolderName: string().required("It's a required field"),
  cardExpiryDate: string().required("It's a required field"),
  cvv: number()
    .typeError("Enter the value in number type")
    .required("It's a required field"),
});
