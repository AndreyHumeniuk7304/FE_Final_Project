import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { yupResolver } from "@hookform/resolvers/yup";
// import { Form, Formik, Field, ErrorMessage } from "formik";
import theme from "../../theme";
import "./CheckoutForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
// import Payment from "./Payment/Payment.jsx";
import Form from "../Forms/Form";
import { useState, useEffect } from "react";
import DataForm, { checkoutSchema } from "./DataForm";
import { getPaymentMethod } from "../../api/paymentMethod";
import { paymentMethodAction } from "../../store/paymentMethod/action";

const CheckoutForm = () => {
  const cartList = useSelector((state) => state.cart.list);
  const paymentMethod = useSelector((state) => state.paymentMethod);
  const [checkoutInputNames, setCheckoutInputNames] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const dispatch = useDispatch();

  console.log(paymentMethod);
  console.log(checkoutInputNames);

  useEffect(() => {
    getPaymentMethod().then((res) => setPaymentMethods(res));
  }, []);

  const {
    register,
    handleSubmit,
    handleChange,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      cardNumber: "",
      cardHolderName: "",
      cardExpiryDate: "",
      cvv: "",
      deliveryAdress: "",
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

  const handleSubmitForm = (value) => {
    console.log(value);
  };

  const handleChangeForm = (e) => {
    console.log(e.target.value);
    // shippingMethods.forEach((method) => {
    //   if (e.target.value === method.name) {
    //     dispatch(shippingMethodAction(method));
    //   }
    // });
    paymentMethods.forEach((method) => {
      e.target.value === method.name && dispatch(paymentMethodAction(method));
    });
  };
  return (
    <Container sx={{ maxWidth: "lg" }}>
      {/* <Typography
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
      </Typography> */}
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
      {/* <Payment /> */}
      <DataForm setCheckoutInputNames={setCheckoutInputNames} />
      <div className="form-wrapper">
        <Form
          actionWithForm={() => {
            console.log("ok");
          }}
          formArr={checkoutInputNames}
          register={register}
          handleChange={handleChangeForm}
          handleSubmit={handleSubmit}
          errors={errors}
          btnName={"Pay"}
        />
      </div>
    </Container>
  );
};

export default CheckoutForm;
