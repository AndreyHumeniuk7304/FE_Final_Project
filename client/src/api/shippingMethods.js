import axios from "../ulits/instance/instance";

export async function getShippingMethods() {
  try {
    const { data } = await axios.get("/shipping-methods");
    return data;
  } catch (err) {
    return err;
  }
}

export async function addShippingMethods(newShippingMethod) {
  try {
    const { data } = await axios.post("/shipping-methods", newShippingMethod);
    return data;
  } catch (err) {
    return err;
  }
}
