import axios from "../ulits/instance/instance";

const addNewProduct = (newProduct) => {
  try {
    const { data } = axios.post("/products", newProduct);
    return data;
  } catch (err) {
    return err;
  }
};

export default addNewProduct;
