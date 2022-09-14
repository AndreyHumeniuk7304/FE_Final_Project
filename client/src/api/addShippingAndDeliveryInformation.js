import axios from "../ulits/instance/instance";

export const addShippingAndDeliveryInformation = async (newOrder) => {
  try {
    const { data } = await axios.post("/orders", newOrder);
    return data;
  } catch (err) {
    return err;
  }
};
