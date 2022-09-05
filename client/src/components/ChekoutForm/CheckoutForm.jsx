import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { yupResolver } from "@hookform/resolvers/yup";
// import { Form, Formik, Field, ErrorMessage } from "formik";
import theme from "../../theme";
import "./CheckoutForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkoutInputNames, checkoutSchema } from "./dataForm";
import { useForm } from "react-hook-form";
import Form from "../Forms/Form";

const CheckoutForm = () => {
  const cartList = useSelector((state) => state.cart.list);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      cardNumber: "",
      cardHolderName: "",
      expiryDate: "",
      cvv: "",
    },
  });

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

  const handleSubmitForm = () => {
    console.log("ok");
  };
  return (
    <Container sx={{ maxWidth: "lg" }}>
      <Typography
        sx={{
          [theme.breakpoints.between("mobile", "tablet")]: {
            fontSize: 14,

            mb: "28px",
          },
          fontFamily: "fontFamily",
          textAlign: "center",
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
          textAlign: "center",
        }}
        component="h4"
        align="center"
      >
        Total payment amount $ {getTotalPrice()}
      </Typography>

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
      <div className="form-wrapper">
        <Form
          actionWithForm={handleSubmitForm}
          formArr={checkoutInputNames}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          btnName={"Pay"}
        />
      </div>

      {/* <Formik
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

                
                <section className="form__inputs">
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
                      type="password"
                      className="input-item input-item-cvv"
                      id="cvv"
                      name="cvv"
                    />
                    <CustomErrorMessage className="error-box" name="cvv" />
                  </div>

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
      </Formik> */}
    </Container>
  );
};

export default CheckoutForm;

// CustomErrorMessage.propTypes = {
//   name: PropTypes.string,
// };
