import React, { useEffect, useState } from "react";
import { getPaymentMethod } from "../../../api/paymentMethod";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { paymentMethodAction } from "../../../store/paymentMethod/action";

const Payment = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const dispatch = useDispatch();
  const paymentMethod = useSelector((state) => state.paymentMethod);

  useEffect(() => {
    getPaymentMethod().then((res) => setPaymentMethods(res));
  }, []);

  useEffect(() => {
    paymentMethods.length != 0 &&
      dispatch(paymentMethodAction(paymentMethods[0]));
  }, [paymentMethods]);

  const activePaymentMethod = (e) => {
    paymentMethods.forEach((method) => {
      method.imageUrl == e.target.src && dispatch(paymentMethodAction(method));
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

Payment.propTypes = {
  paymentMethod: PropTypes.object,
  setPaymentMethod: PropTypes.func,
};

export default Payment;
