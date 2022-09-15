import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../Forms/Form";
import { productSchema, setMessage, subscribeInputName } from "./data";
import { addNewSubscriber, updateSubscriberByEmail } from "../../api/subscribe";
import { useEffect } from "react";

import {
  delSubscribes,
  fetchSubscriber,
  getSubscribes,
} from "../../store/subscribe/actions";
import { useDispatch, useSelector } from "react-redux";

const Subscribe = ({ product }) => {
  const [isSubscribeOpen, setISSubscribeOpen] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const subscribe = useSelector((state) => state.subscribe);
  const email = useSelector((state) => state.userAccount.customer.email);

  useEffect(() => {
    const isSubscribe = JSON.parse(localStorage.getItem("subscribe"));
    isSubscribe && dispatch(getSubscribes(isSubscribe));
  }, []);
  useEffect(() => {
    email && dispatch(fetchSubscriber(email));
  }, [email]);

  useEffect(() => {
    setSubscribeSuccess(subscribe.enabled);
  }, [subscribe]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      email: email || "",
      letterSubject:
        "You received this email because you were subscribed to the newsletter",
      letterHtml: "",
      enabled: true,
    },
  });

  const subscribeUser = (values) => {
    const letterHtml = setMessage(product);

    values.letterHtml = letterHtml.replace(/\s/g, "");

    addNewSubscriber(values).catch((err) => {
      setError({ email: JSON.parse(err.request.response) });
    });
    setSubscribeSuccess(true);
    setISSubscribeOpen(false);
    dispatch(getSubscribes({ enabled: true, email: values.email }));
  };

  const unsubscribeUser = () => {
    const updateSubscriber = {
      email: subscribe.email,
      enabled: false,
      letterSubject: "Unsubscribe",
      letterHtml: "<p>You are unsubscribed</p>",
    };

    dispatch(delSubscribes(subscribe.email));
    updateSubscriberByEmail(updateSubscriber, subscribe.email);
  };

  return (
    <>
      {!subscribeSuccess && (
        <Button onClick={() => setISSubscribeOpen(!isSubscribeOpen)}>
          Subscribe for new products &#8595;
        </Button>
      )}
      <Box className="subscribe">
        {isSubscribeOpen && (
          <Form
            actionWithForm={subscribeUser}
            formArr={subscribeInputName}
            register={register}
            handleSubmit={handleSubmit}
            errors={error || errors}
            btnName={"SUBSCRIBE"}
          />
        )}
      </Box>
      {subscribeSuccess && (
        <Box sx={{ pt: 2 }}>You have successfully subscribed to our site.</Box>
      )}
      {subscribeSuccess && (
        <Button onClick={unsubscribeUser}>Unsubscribe</Button>
      )}
    </>
  );
};

export default Subscribe;

Subscribe.propTypes = {
  product: PropTypes.object,
};
