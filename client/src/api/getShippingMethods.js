import axios from "../ulits/instance/instance";

export default async function getShippingMethods() {
  try {
    const { data } = await axios.get("/shipping-methods");
    return data;
  } catch (err) {
    return err;
  }
}
