import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import getAllProductsToRender from "../../../api/getAllProductsToRender";
import {
  getPaymentMethod,
  addPaymentMethod,
  deletePaymentMethod,
} from "../../../api/paymentMethod";

const Payment = () => {
  const token = useSelector((state) => state.userAccount.customer.token);
  const newPaymentMethod = {
    customId: "payment-method-1",
    name: "Payment Method #1",
    paymentProcessor: "Adyen",
  };

  useEffect(() => {
    // addPaymentMethod(newPaymentMethod).then((res) => console.log(res));
    // deletePaymentMethod("payment-method-1");
    // getPaymentMethod().then((res) => console.log(res));
  }, []);

  return (
    <div className="form__pay-method">
      <div className="form__pay-method__item">
        <a href="#!">
          <img src="./images/mastercard-pay.png" alt="mastercard" />
        </a>
      </div>
      <div className="form__pay-method__item">
        <a href="#!">
          <img src="./images/amer-express-pay.jpg" alt="express" />
        </a>
      </div>
      <div className="form__pay-method__item">
        <a href="#!">
          <img src="./images/visa-pay.png" alt="visa" />
        </a>
      </div>
    </div>
  );
};

export default Payment;
