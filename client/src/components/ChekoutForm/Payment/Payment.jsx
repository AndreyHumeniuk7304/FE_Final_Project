import React, { useEffect, useState } from "react";
import { getPaymentMethod } from "../../../api/paymentMethod";

const Payment = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState();

  useEffect(() => {
    getPaymentMethod().then((res) => setPaymentMethods(res));
  }, []);

  const activePaymentMethod = (e) => {
    paymentMethods.forEach((method) => {
      method.imageUrl == e.target.src && setPaymentMethod(method);
    });
  };

  return (
    <div className="form__pay-method">
      {paymentMethods != [] &&
        paymentMethods.map((method) => {
          return (
            <div
              key={method._id}
              className="form__pay-method__item"
              onClick={(e) => activePaymentMethod(e)}
            >
              <img
                style={{
                  width: method == paymentMethod ? "80px" : "40px",
                }}
                src={method.imageUrl}
                alt={method.description}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Payment;
