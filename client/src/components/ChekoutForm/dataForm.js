import { object, string, number } from "yup";
import valid from "card-validator";

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
  cardNumber: string()
    .test(
      "test-number",
      "Card number is invalid",
      (value) => valid.number(value).isValid
    )
    .required("It's a required field"),
  cardHolderName: string().required("It's a required field"),
  cardExpiryDate: string()
    .typeError("Not a valid expiration date. Example: MM/YY")
    .max(5, "Not a valid expiration date. Example: MM/YY")
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      "Not a valid expiration date. Example: MM/YY"
    )
    .test(
      "test-credit-card-expiration-date",
      "Invalid Expiration Date has past",
      (expirationDate) => {
        if (!expirationDate) {
          return false;
        }

        const today = new Date();
        const monthToday = today.getMonth() + 1;
        const yearToday = today.getFullYear().toString().substr(-2);

        const [expMonth, expYear] = expirationDate.split("/");

        if (Number(expYear) < Number(yearToday)) {
          return false;
        } else if (
          Number(expMonth) < monthToday &&
          Number(expYear) <= Number(yearToday)
        ) {
          return false;
        }

        return true;
      }
    )
    .test(
      "test-credit-card-expiration-date",
      "Invalid Expiration Month",
      (expirationDate) => {
        if (!expirationDate) {
          return false;
        }

        const [expMonth] = expirationDate.split("/");

        if (Number(expMonth) > 12) {
          return false;
        }

        return true;
      }
    )
    .required("Expiration date is required"),
  cvv: string()
    .test("test-number", "Cvv is invalid", (value) => valid.cvv(value).isValid)
    .required("It's a required field"),
});
