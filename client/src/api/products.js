import axios from "../ulits/instance/instance";

export const updateProduct = async (products, id) => {
  try {
    const { data } = await axios.put(`/products/${id}`, products);
    return data;
  } catch (err) {
    return err;
  }
};

export const addNewProduct = async (values) => {
  try {
    const { data } = await axios.post("/products", values);
    return data;
  } catch (err) {
    return err;
  }
};
