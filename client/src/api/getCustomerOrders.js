import axios from "../ulits/instance/instance";

export default async function getCustomerOrders() {
  try {
    const { data } = await axios.get("/orders");
    return data;
  } catch (err) {
    return err;
  }
}
