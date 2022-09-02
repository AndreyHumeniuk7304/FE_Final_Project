import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../Forms/Form";
import { productSchema, subscribeInputName, defaultValues } from "./data";

import { addNewSubscriber } from "../../api/subscribe";
import { useEffect } from "react";

const Subscribe = () => {
  const [isSubscribeOpen, setISSubscribeOpen] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  useEffect(() => {
    const isSubscribe = localStorage.getItem("subscribe");
    setSubscribeSuccess(isSubscribe);
    setISSubscribeOpen(!isSubscribe);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: defaultValues,
  });

  const subscribeUser = (values) => {
    try {
      addNewSubscriber(values);
      setSubscribeSuccess(true);
      setISSubscribeOpen(false);
      localStorage.setItem("subscribe", "true");
    } catch (err) {
      return err;
    }
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
            errors={errors}
            btnName={"SUBSCRIBE"}
          />
        )}
      </Box>
      {subscribeSuccess && (
        <Box sx={{ pt: 2 }}>You have successfully subscribed to our site.</Box>
      )}
    </>
  );
};

export default Subscribe;
