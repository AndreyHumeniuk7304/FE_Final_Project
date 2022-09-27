import { object, string } from "yup";
import valid from "card-validator";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DataForm = (props) => {
  const paymentMethod = useSelector((state) => state.paymentMethod);
  const { setCheckoutInputNames } = props;
  const isLogin = useSelector((state) => state.userAccount.isLogin);

  useEffect(() => {
    if (paymentMethod.name === "Cards" && !isLogin) {
      setCheckoutInputNames([
        {
          inputName: "paymentMethod",
          formType: "droplist",
          formName: ["Cards", "Mobile", "Cash"],
          label: "Payment Method",
        },
        { inputName: "cardNumber", formType: "input", label: "Card Number" },
        {
          inputName: "cardHolderName",
          formType: "input",
          label: "Card Holder Name",
          className: "entry__checkbox",
        },
        {
          inputName: "cardExpiryDate",
          formType: "inputSM",
          label: "Card Expiry Date",
        },
        { inputName: "cvv", formType: "inputSM", label: "CVC/CVV/CID" },
        {
          inputName: "deliveryAdress",
          formType: "input",
          label: "Delivery adress",
        },
        {
          inputName: "shippingMethod",
          formType: "droplist",
          label: "Shipping method",
          formName: ["Nova Poshta", "UkrPoshta", "Meest"],
        },
        {
          inputName: "telephone",
          formType: "input",
          label: "Telephone",
        },
        {
          inputName: "mail",
          formType: "input",
          label: "E-mail",
        },
      ]);
    } else if (paymentMethod.name === "Cards" && isLogin) {
      setCheckoutInputNames([
        {
          inputName: "paymentMethod",
          formType: "droplist",
          formName: ["Cards", "Mobile", "Cash"],
          label: "Payment Method",
        },
        { inputName: "cardNumber", formType: "input", label: "Card Number" },
        {
          inputName: "cardHolderName",
          formType: "input",
          label: "Card Holder Name",
          className: "entry__checkbox",
        },
        {
          inputName: "cardExpiryDate",
          formType: "inputSM",
          label: "Card Expiry Date",
        },
        { inputName: "cvv", formType: "inputSM", label: "CVC/CVV/CID" },
        {
          inputName: "deliveryAdress",
          formType: "input",
          label: "Delivery adress",
        },
        {
          inputName: "shippingMethod",
          formType: "droplist",
          label: "Shipping method",
          formName: ["Nova Poshta", "UkrPoshta", "Meest"],
        },
      ]);
    }

    if (paymentMethod.name === "Mobile" && !isLogin) {
      setCheckoutInputNames([
        {
          inputName: "paymentMethod",
          formType: "droplist",
          formName: ["Mobile", "Cards", "Cash"],
          label: "Payment Method",
        },
        {
          inputName: "deliveryAdress",
          formType: "input",
          label: "Delivery adress",
        },
        {
          inputName: "shippingMethod",
          formType: "droplist",
          label: "Shipping method",
          formName: ["Nova Poshta", "UkrPoshta", "Meest"],
        },
        {
          inputName: "telephone",
          formType: "input",
          label: "Telephone",
        },
        {
          inputName: "mail",
          formType: "input",
          label: "E-mail",
        },
      ]);
    } else if (paymentMethod.name === "Mobile" && isLogin) {
      setCheckoutInputNames([
        {
          inputName: "paymentMethod",
          formType: "droplist",
          formName: ["Mobile", "Cards", "Cash"],
          label: "Payment Method",
        },
        {
          inputName: "deliveryAdress",
          formType: "input",
          label: "Delivery adress",
        },
        {
          inputName: "shippingMethod",
          formType: "droplist",
          label: "Shipping method",
          formName: ["Nova Poshta", "UkrPoshta", "Meest"],
        },
      ]);
    }

    if (paymentMethod.name === "Cash" && !isLogin) {
      setCheckoutInputNames([
        {
          inputName: "paymentMethod",
          formType: "droplist",
          formName: ["Cash", "Mobile", "Cards"],
          label: "Payment Method",
        },
        {
          inputName: "deliveryAdress",
          formType: "input",
          label: "Delivery adress",
        },
        {
          inputName: "shippingMethod",
          formType: "droplist",
          label: "Shipping method",
          formName: ["Nova Poshta", "UkrPoshta", "Meest"],
        },
        {
          inputName: "telephone",
          formType: "input",
          label: "Telephone",
        },
        {
          inputName: "mail",
          formType: "input",
          label: "E-mail",
        },
      ]);
    } else if (paymentMethod.name === "Cash" && isLogin) {
      setCheckoutInputNames([
        {
          inputName: "paymentMethod",
          formType: "droplist",
          formName: ["Cash", "Mobile", "Cards"],
          label: "Payment Method",
        },
        {
          inputName: "deliveryAdress",
          formType: "input",
          label: "Delivery adress",
        },
        {
          inputName: "shippingMethod",
          formType: "droplist",
          label: "Shipping method",
          formName: ["Nova Poshta", "UkrPoshta", "Meest"],
        },
      ]);
    }
  }, [paymentMethod]);
};

export default DataForm;

export const checkoutSchemaIsLogin = object({
  cardNumber: string()
    .test(
      "test-number",
      "Card number is invalid",
      (value) => valid.number(value).isValid
    )
    .required("It's a required field"),
  cardHolderName: string()
    .required("It's a required field")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name"),
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
  deliveryAdress: string()
    .required("It's a required field")
    .matches(/^([a-zA-z0-9/\\''(),-\s]{6,255})$/, "Adress must be a valid"),
  shippingMethod: string().required("It's a required field"),
});

export const checkoutSchemaWithoutLogin = object({
  cardNumber: string()
    .test(
      "test-number",
      "Card number is invalid",
      (value) => valid.number(value).isValid
    )
    .required("It's a required field"),
  cardHolderName: string()
    .required("It's a required field")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name"),
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
  deliveryAdress: string()
    .required("It's a required field")
    .matches(/^([a-zA-z0-9/\\''(),-\s]{6,255})$/, "Adress must be a valid"),
  shippingMethod: string().required("It's a required field"),
  mail: string()
    .email("E-mail must be a valid")
    .required("It's a required field"),
  telephone: string()
    .required("Telephone is required.")
    .min(13, "Telephone is to short")
    .max(13, "Telephone is to long")
    .phone(),
});

export const checkoutSchemaMinimizeIsLogin = object({
  paymentMethod: string().required("It's a required field"),
  deliveryAdress: string()
    .required("It's a required field")
    .matches(/^([a-zA-z0-9/\\''(),-\s]{2,255})$/, "Adress must be a valid"),
  shippingMethod: string().required("It's a required field"),
});

export const checkoutSchemaMinimizeWithoutLogin = object({
  paymentMethod: string().required("It's a required field"),
  deliveryAdress: string()
    .required("It's a required field")
    .matches(/^([a-zA-z0-9/\\''(),-\s]{2,255})$/, "Adress must be a valid"),
  shippingMethod: string().required("It's a required field"),
  mail: string()
    .email("E-mail must be a valid")
    .required("It's a required field"),
  telephone: string()
    .required("Telephone is required.")
    .min(13, "Telephone is to short")
    .max(13, "Telephone is to long")
    .phone(),
});
