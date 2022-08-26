import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Form, Formik, Field, ErrorMessage } from "formik";
import theme from "../../theme";
import "./CheckoutForm.scss";
import { object, string, number } from "yup";
import PropTypes from "prop-types";
// import CustomErrorMessage from "../Forms/CustomErrorMessage";

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
    // userAge: number()
    //   .typeError("Enter the value in number type")
    //   .required("It's a required field"),
    // deliveryAddress: string().required("It's a required field"),
    // phoneNumber: number()
    //   .typeError("Enter the value in number type")
    //   .required("It's a required field")
    //   .positive("A phone number can't start with a minus")
    //   .integer("A phone number can't include a decimal point"),
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
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
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
                      className="input-item"
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
                    <Box sx={{ color: "primary.dark" }}>
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
                      className="input-item input-item-cvv"
                      id="cvv"
                      name="cvv"
                    />
                    <CustomErrorMessage className="error-box" name="cvv" />
                    {/* <a href="!#">What is CVC/CVV/CID ?</a> */}
                  </div>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        [theme.breakpoints.between("mobile", "desktop")]: {
                          padding: "17px 115px",
                          fontSize: "18px",
                          lineHeight: "25px",
                        },
                        backgroundColor: "primary.dark",
                        padding: "16px 60px",
                        fontSize: "18px",
                        lineHeight: "25px",
                      }}
                      // disabled={props.isSubmitting}
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
