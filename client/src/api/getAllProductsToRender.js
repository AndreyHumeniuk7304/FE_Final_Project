import axios from "../ulits/instance/instance";

export default async function getAllProductsToRender() {
  try {
    const { data } = await axios.get("/products");
    return data;
  } catch (err) {
    return err;
  }
}
