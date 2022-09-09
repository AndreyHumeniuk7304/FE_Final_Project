import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { yupResolver } from "@hookform/resolvers/yup";
// import { Form, Formik, Field, ErrorMessage } from "formik";
import theme from "../../theme";
import "./CheckoutForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Form from "../Forms/Form";
import { useState, useEffect } from "react";
import DataForm, { checkoutSchema, checkoutSchemaMinimize } from "./DataForm";
import { getPaymentMethod } from "../../api/paymentMethod";
import { paymentMethodAction } from "../../store/paymentMethod/action";

const CheckoutForm = () => {
  const cartList = useSelector((state) => state.cart.list);
  const paymentMethod = useSelector((state) => state.paymentMethod);
  const [checkoutInputNames, setCheckoutInputNames] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getPaymentMethod().then((res) => setPaymentMethods(res));
  }, []);

  const {
    register,
    handleSubmit,
    handleChange,
    formState: { errors },
  } = useForm({
    resolver:
      paymentMethod.name == "Cards"
        ? yupResolver(checkoutSchema)
        : yupResolver(checkoutSchemaMinimize),
    defaultValues: {
      paymentMethod: "",
      cardNumber: "",
      cardHolderName: "",
      cardExpiryDate: "",
      cvv: "",
      deliveryAdress: "",
    },
  });
  console.log(paymentMethod.name);
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
    paymentMethods.forEach((method) => {
      e.target.value === method.name && dispatch(paymentMethodAction(method));
    });
  };
  return (
    <Container sx={{ maxWidth: "lg" }}>
      <Typography
        sx={{
          [theme.breakpoints.between("mobile", "tablet")]: {
            fontSize: 14,
            fontWeight: 400,
            textAlign: "center",
          },
          fontSize: 18,
          fontFamily: "fontFamily",
          fontWeight: 500,
          mb: "40px",
          textAlign: "center",
        }}
        component="h4"
        align="center"
      >
        Total payment amount $ {getTotalPrice()}
      </Typography>
      <DataForm setCheckoutInputNames={setCheckoutInputNames} />
      <div className="form-wrapper">
        <Form
          actionWithForm={(values) => {
            console.log(values);
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
