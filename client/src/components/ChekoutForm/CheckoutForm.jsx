import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Form, Formik, Field } from "formik";
import "./CheckoutForm.scss";

const CheckoutForm = () => {
  return (
    <Container sx={{ maxWidth: "lg" }}>
      <Formik
        initialValues={{
          cardNumber: "",
          cardHolderName: "",
          cardExpiryDateOfMonth: "",
          cardExpiryDateOfYear: "",
          cvv: "",
        }}
      >
        {(props) => {
          return (
            <>
              <Form className="form">
                <Typography
                  align="center"
                  sx={{
                    fontFamily: "fontFamily",
                    color: "primary.dark",
                    fontSize: 14,
                    fontWeight: 700,
                    paddingTop: "10px",
                    mb: "28px",
                  }}
                  component="h2"
                >
                  Please select your payment method
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: "fontFamily",
                    color: "primary.dark",
                    fontWeight: 400,
                    mb: "40px",
                  }}
                  component="h4"
                  align="center"
                >
                  Total payment amount $ 1260
                </Typography>

                <div className="form__pay-method">
                  <div className="form__pay-method__item">
                    <img src="./images/mastercard-pay.png" alt="mastercard" />
                  </div>
                  <div className="form__pay-method__item">
                    <img src="./images/amer-express-pay.jpg" alt="express" />
                  </div>
                  <div className="form__pay-method__item">
                    <img src="./images/visa-pay.png" alt="visa" />
                  </div>
                </div>
                <section className="form__inputs">
                  <div className="form__inputs-item">
                    <label className="label" htmlFor="cardNumber">
                      Card Number
                    </label>
                    <Field
                      className="input-item"
                      id="cardNumber"
                      name="cardNumber"
                    />
                  </div>

                  <div className="form__inputs-item">
                    <label className="label" htmlFor="cardHolderName">
                      Card Holder Name
                    </label>
                    <Field
                      className="input-item"
                      id="cardHolderName"
                      name="cardHolderName"
                    />
                  </div>

                  <div className="form__inputs-item">
                    <label className="label" htmlFor="cardExpiryDate">
                      Card Expiry Date
                    </label>
                    <div>
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
                    </div>
                  </div>
                  <div className="form__inputs-item">
                    <label className="label" htmlFor="cvv">
                      CVC/CVV/CID
                    </label>
                    <Field
                      className="input-item input-item-cvv"
                      id="cvv"
                      name="cvv"
                    />
                    {/* <a href="!#">What is CVC/CVV/CID ?</a> */}
                  </div>
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
