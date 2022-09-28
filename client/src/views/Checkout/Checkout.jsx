import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { yupResolver } from "@hookform/resolvers/yup";
import theme from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Form from "../../components/Forms/Form";
import { useState, useEffect } from "react";
import DataForm, {
  checkoutSchemaIsLogin,
  checkoutSchemaMinimizeIsLogin,
  checkoutSchemaWithoutLogin,
  checkoutSchemaMinimizeWithoutLogin,
} from "../../components/ChekoutForm/DataForm";
import { getPaymentMethod } from "../../api/paymentMethod";
import { paymentMethodAction } from "../../store/paymentMethod/action";
import DeliveryInfo from "../../components/ChekoutForm/Delivery/DeliveryInfo";
import { getShippingMethods } from "../../api/shippingMethods";
import { shippingMethodAction } from "../../store/shippingMethod/action";
import { addShippingAndDeliveryInformation } from "../../api/addShippingAndDeliveryInformation";
import { useNavigate } from "react-router-dom";
import { deleteCart } from "../../store/cart/actions";

const Checkout = () => {
  const cartList = useSelector((state) => state.cart.list);
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const paymentMethod = useSelector((state) => state.paymentMethod);
  const customerInformation = useSelector(
    (state) => state.userAccount.customer
  );
  const [checkoutInputNames, setCheckoutInputNames] = useState([]);
  const [shippingMethods, setShippingMethods] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    getShippingMethods().then((data) => setShippingMethods(data));
    getPaymentMethod().then((res) => setPaymentMethods(res));
  }, []);

  useEffect(() => {
    paymentMethods.length !== 0 &&
      dispatch(paymentMethodAction(paymentMethods[0]));
    shippingMethods.length !== 0 &&
      dispatch(shippingMethodAction(shippingMethods[0]));
  }, [paymentMethods, shippingMethods]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver:
      paymentMethod.name === "Cards" && isLogin
        ? yupResolver(checkoutSchemaIsLogin)
        : paymentMethod.name === "Cards" && !isLogin
        ? yupResolver(checkoutSchemaWithoutLogin)
        : isLogin
        ? yupResolver(checkoutSchemaMinimizeIsLogin)
        : yupResolver(checkoutSchemaMinimizeWithoutLogin),
    defaultValues: {
      paymentMethod: "Cards",
      cardNumber: "",
      cardHolderName: "",
      cardExpiryDate: "",
      cvv: "",
      deliveryAdress: "",
      shippingMethod: "Nova Poshta",
      telephone: "",
      mail: "",
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

  const handleSubmitForm = async (value) => {
    const { email, telephone, _id, firstName, lastName } = customerInformation;
    const {
      shippingMethod,
      paymentMethod,
      deliveryAdress,
      telephone: phoneNumber,
      cardExpiryDate,
      cardHolderName,
      cardNumber,
      cvv,
      mail,
    } = value;

    let count = 0;
    cartList.forEach((quantity) => {
      count += quantity.cartQuantity;
    });

    const loginUserInformation = {
      customerId: _id,
      email: email,
      mobile: telephone,
      firstName: firstName,
      lastName: lastName,
      letterSubject: "Thank you for order! You are welcome!",
      letterHtml: `<h1>Your order is placed.</h1>
        <p>Delivery method is ${shippingMethod} to adress ${deliveryAdress}</p>
        <p>Payment method is ${paymentMethod} </p>
        <p>You bought ${count} items</p>
        <p>All price: ${getTotalPrice()}</p>`,
      shippingMethod: shippingMethod,
      paymentMethod: paymentMethod,
      deliveryAdress: deliveryAdress,
      cardExpiryDate: cardExpiryDate,
      cardHolderName: cardHolderName,
      cardNumber: cardNumber,
      cvv: cvv,
    };

    const notLoginUserInformation = {
      email: mail,
      mobile: phoneNumber,
      products: cartList,
      letterSubject: "Thank you for order! You are welcome!",
      letterHtml: `<h1>Your order is placed.</h1>
        <p>Delivery method is ${shippingMethod} to adress ${deliveryAdress}</p>
        <p>Payment method is ${paymentMethod} </p>
        <p>You bought ${count} items</p>
        <p>All price: ${getTotalPrice()}</p>`,
      shippingMethod: shippingMethod,
      paymentMethod: paymentMethod,
      deliveryAdress: deliveryAdress,
      cardExpiryDate: cardExpiryDate,
      cardHolderName: cardHolderName,
      cardNumber: cardNumber,
      cvv: cvv,
    };

    addShippingAndDeliveryInformation(
      isLogin ? loginUserInformation : notLoginUserInformation
    );
    dispatch(deleteCart(isLogin));
    navigate("/completed-order", { replace: true });
  };

  const handleChangeForm = (e) => {
    paymentMethods.forEach((method) => {
      e.target.value === method.name && dispatch(paymentMethodAction(method));
    });
    shippingMethods.forEach((method) => {
      e.target.value === method.name && dispatch(shippingMethodAction(method));
    });
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
      <Box className="form-wrapper">
        <Form
          actionWithForm={handleSubmitForm}
          formArr={checkoutInputNames}
          register={register}
          handleChange={handleChangeForm}
          handleSubmit={handleSubmit}
          errors={errors}
          btnName={"Pay"}
          control={control}
        />
      </Box>
      <DeliveryInfo />
    </Container>
  );
};

export default Checkout;
