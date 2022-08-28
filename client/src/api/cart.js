import axios from "../ulits/instance/instance";

export const createCart = async (products) => {
  const { data } = await axios.post("/cart", { products });
  return data;
};

export const updateCart = async (products) => {
  const { data } = await axios.put("/cart", { products });
  return data;
};

export const addProductToCart = async (productID) => {
  const { data } = await axios.put(`/cart/${productID}`);
  return data;
};

export const decreaseQuantity = async (productID) => {
  const { data } = await axios.delete(`/cart/product/${productID}`);
  return data;
};

export const deleteProduct = async (productID) => {
  const { data } = await axios.delete(`/cart/${productID}`);
  return data;
};

export const getCart = async () => {
  const { data } = await axios.get("/cart");
  return data;
};

export const deleteCart = async () => {
  const { data } = await axios.delete("/cart");
  return data;
};
