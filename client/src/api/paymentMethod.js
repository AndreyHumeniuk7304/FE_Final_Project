import axios from "../ulits/instance/instance";

export const addPaymentMethod = async (newPaymentMethod) => {
  const { data } = await axios.post("/payment-methods", newPaymentMethod);
  return data;
};

export const getPaymentMethod = async () => {
  const { data } = await axios.get("/payment-methods");
  return data;
};

export const deletePaymentMethod = async (paymentMethod) => {
  const { data } = await axios.delete(`/payment-methods/${paymentMethod}`);
  return data;
};
