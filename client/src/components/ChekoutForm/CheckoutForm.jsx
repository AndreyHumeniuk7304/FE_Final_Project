import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { yupResolver } from "@hookform/resolvers/yup";
import theme from "../../theme";
import "./CheckoutForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Payment from "./Payment/Payment.jsx";
import Form from "../Forms/Form";
import { useState } from "react";
import DataForm, { checkoutSchema } from "./DataForm";
import DeliveryInfo from "./Delivery/DeliveryInfo";
import { getShippingMethods } from "../../api/shippingMethods";
import { useEffect } from "react";
import { shippingMethodAction } from "../../store/shippingMethod/action";

const CheckoutForm = () => {
  const cartList = useSelector((state) => state.cart.list);
  const [typeOfMobilePayment, setTypeOfMobilePayment] = useState();
  const paymentMethod = useSelector((state) => state.paymentMethod);
  const [checkoutInputNames, setCheckoutInputNames] = useState([]);
  const [shippingMethods, setShippingMethods] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getShippingMethods().then((data) => setShippingMethods(data));
  }, []);

  const {
    register,
    handleSubmit,
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
    shippingMethods.forEach((method) => {
      if (e.target.value === method.name) {
        dispatch(shippingMethodAction(method));
      }
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
      <Payment />
      <DataForm setCheckoutInputNames={setCheckoutInputNames} />
      {paymentMethod.name == "Mobile" && (
        <div className="form__mobile-payment">
          {paymentMethod.fromOfMobilePayment.map((method, index) => {
            return (
              <div
                key={index}
                className="form__mobile-img"
                onClick={() => setTypeOfMobilePayment(method)}
              >
                <img
                  style={{
                    width:
                      typeOfMobilePayment != undefined &&
                      method.typePay === typeOfMobilePayment.typePay
                        ? "120px"
                        : "80px",
                  }}
                  src={method.imgPay}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      )}
      <div className="form-wrapper">
        <Form
          actionWithForm={handleSubmitForm}
          formArr={checkoutInputNames === [] ? [] : checkoutInputNames}
          register={register}
          handleChange={handleChangeForm}
          handleSubmit={handleSubmit}
          errors={errors}
          btnName={"Pay"}
        />
      </div>
      <DeliveryInfo />
    </Container>
  );
};

export default CheckoutForm;
