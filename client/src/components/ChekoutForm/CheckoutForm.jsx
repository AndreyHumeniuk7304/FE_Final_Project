import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Form, Formik, Field, ErrorMessage } from "formik";
import theme from "../../theme";
import "./CheckoutForm.scss";
import { object, string, number } from "yup";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getCartItem, isNotLoaded } from "../../store/cart/actions";
import { useEffect, useState } from "react";
import Payment from "./Payment/Payment.jsx";

const CustomErrorMessage = ({ name }) => (
  <ErrorMessage name={name}>
    {(message) => (
      <div className="error-box">
        <i>{message}</i>
      </div>
    )}
  </ErrorMessage>
);

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const cartList = useSelector((state) => state.cart.list);
  const [paymentMethod, setPaymentMethod] = useState();
  const [typeOfMobilePayment, setTypeOfMobilePayment] = useState();

  useEffect(() => {
    dispatch(getCartItem(isLogin));
    return () => dispatch(isNotLoaded());
  }, []);

  const getTotalPrice = () => {
    return cartList.length
      ? cartList.reduce(
          (accumulator, currentValue) =>
            accumulator +
            currentValue.product.currentPrice * currentValue.cartQuantity,
          0
        )
      : 0;
  };

  const schema = object({
    cardNumber: number()
      .typeError("Enter the value in number type")
      .required("It's a required field")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point"),
    cardHolderName: string().required("It's a required field"),
    cardExpiryDateOfMonth: string().required("It's a required field"),
    cardExpiryDateOfYear: string().required("It's a required field"),
    cvv: number()
      .typeError("Enter the value in number type")
      .required("It's a required field"),
    deliveryAdress: string().required("It's a required field"),
  });

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    setTimeout(() => {
      actions.resetForm(true);
      console.log("user information:", values);
      actions.setSubmitting(false);
      // dispatch(clearCart());
    }, 2000);
  };
  return (
    <Container sx={{ maxWidth: "lg" }}>
      <Formik
        initialValues={{
          cardNumber: "",
          cardHolderName: "",
          cardExpiryDateOfMonth: "",
          cardExpiryDateOfYear: "",
          cvv: "",
          deliveryAdress: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {() => {
          return (
            <>
              <Form className="form">
                <Typography
                  sx={{
                    [theme.breakpoints.between("mobile", "tablet")]: {
                      fontSize: 14,
                      textAlign: "center",
                      mb: "28px",
                    },
                    fontFamily: "fontFamily",
                    textAlign: "start",
                    // color: "primary.dark",
                    fontSize: 18,
                    fontWeight: 700,
                    paddingTop: "10px",
                    mb: "52px",
                  }}
                  component="h2"
                >
                  Please select your payment method
                </Typography>

                <Typography
                  sx={{
                    [theme.breakpoints.between("mobile", "tablet")]: {
                      fontSize: 14,
                      fontWeight: 400,
                      textAlign: "center",
                    },
                    fontSize: 18,
                    fontFamily: "fontFamily",
                    // color: "primary.dark",
                    fontWeight: 500,
                    mb: "40px",
                    textAlign: "start",
                  }}
                  component="h4"
                  align="center"
                >
                  Total payment amount $ {getTotalPrice()}
                </Typography>

                <Payment
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                />
                <section className="form__inputs">
                  {paymentMethod === undefined ||
                  paymentMethod.name === "Cards" ? (
                    <>
                      <div className="form__inputs-item">
                        <label className="label" htmlFor="cardNumber">
                          Card Number
                        </label>
                        <Field
                          className="input-item input-item-mob"
                          id="cardNumber"
                          name="cardNumber"
                        />
                        <CustomErrorMessage
                          className="error-box"
                          name="cardNumber"
                        />
                      </div>
                      <div className="form__inputs-item">
                        <label className="label" htmlFor="cardHolderName">
                          Card Holder Name
                        </label>
                        <Field
                          className="input-item "
                          id="cardHolderName"
                          name="cardHolderName"
                        />
                        <CustomErrorMessage
                          className="error-box"
                          name="cardHolderName"
                        />
                      </div>
                      <div className="form__inputs-item">
                        <label className="label" htmlFor="cardExpiryDate">
                          Card Expiry Date
                        </label>
                        <Box>
                          <Field
                            as="select"
                            className="input-item input-item-sm"
                            id="cardExpiryDateOfMonth"
                            name="cardExpiryDateOfMonth"
                          >
                            <option value=""></option>
                            <option value="jan">01</option>
                            <option value="feb">02</option>
                            <option value="march">03</option>
                            <option value="apr">04</option>
                            <option value="may">05</option>
                            <option value="june">06</option>
                            <option value="july">07</option>
                            <option value="aug">08</option>
                            <option value="sept">09</option>
                            <option value="oct">10</option>
                            <option value="nov">11</option>
                            <option value="dec">12</option>
                          </Field>
                          <CustomErrorMessage
                            className="error-box"
                            name="cardExpiryDateOfMonth"
                          />
                          /
                          <Field
                            as="select"
                            className="input-item input-item-sm"
                            id="cardExpiryDateOfYear"
                            name="cardExpiryDateOfYear"
                          >
                            <option value=""></option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                          </Field>
                          <CustomErrorMessage
                            className="error-box"
                            name="cardExpiryDateOfYear"
                          />
                        </Box>
                      </div>
                      <div className="form__inputs-item">
                        <label className="label" htmlFor="cvv">
                          CVC/CVV/CID
                        </label>
                        <Field
                          type="password"
                          className="input-item input-item-cvv"
                          id="cvv"
                          name="cvv"
                        />
                        <CustomErrorMessage className="error-box" name="cvv" />
                      </div>
                    </>
                  ) : (
                    paymentMethod.name === "Mobile" && (
                      <div className="form__mobile-payment">
                        {paymentMethod.fromOfMobilePayment.map(
                          (type, index) => {
                            return (
                              <div
                                key={index}
                                className="form__mobile-img"
                                onClick={() => setTypeOfMobilePayment(type)}
                              >
                                <img
                                  style={{
                                    width:
                                      typeOfMobilePayment != undefined &&
                                      type.typePay ===
                                        typeOfMobilePayment.typePay
                                        ? "150px"
                                        : "80px",
                                  }}
                                  src={type.imgPay}
                                  alt=""
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    )
                  )}

                  <div className="form__inputs-item">
                    <label className="label" htmlFor="deliveryAdress">
                      Delivery Adress
                    </label>
                    <Field
                      className="input-item"
                      id="deliveryAdress"
                      name="deliveryAdress"
                    />
                    <CustomErrorMessage
                      className="error-box"
                      name="deliveryAdress"
                    />
                  </div>
                  <Box
                    sx={{
                      [theme.breakpoints.between("mobile", "desktop")]: {
                        justifyContent: "center",
                      },
                      justifyContent: "flex-start",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        [theme.breakpoints.between("mobile", "desktop")]: {
                          fontSize: "16px",
                          lineHeight: "25px",
                        },
                        padding: "17px 115px",
                        backgroundColor: "primary.dark",
                        fontSize: "18px",
                        lineHeight: "35px",
                      }}
                      className="checkout-btn"
                    >
                      pay
                    </Button>
                  </Box>
                </section>
              </Form>
            </>
          );
        }}
      </Formik>
    </Container>
  );
};

export default CheckoutForm;

CustomErrorMessage.propTypes = {
  name: PropTypes.string,
};
