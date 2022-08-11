import axios from "axios";

export const createCart = async (products) => {
  try {
    await axios.post("/cart", { products });
  } catch (err) {
    return err;
  }
};

export const updateCart = async (products) => {
  try {
    await axios.put("/cart", { products });
  } catch (err) {
    return err;
  }
};

export const addProductToCart = async (productID) => {
  try {
    await axios.put(`/cart/${productID}`);
  } catch (err) {
    return err;
  }
};

export const decreaseProductQuantity = async (productID) => {
  try {
    await axios.delete(`/cart/product/${productID}`);
  } catch (err) {
    return err;
  }
};

export const deleteProduct = async (productID) => {
  try {
    await axios.delete(`/cart/${productID}`);
  } catch (err) {
    return err;
  }
};

export const getCart = async () => {
  try {
    await axios.get("/cart");
  } catch (err) {
    return err;
  }
};

export const deleteCart = async () => {
  try {
    await axios.delete("/cart");
  } catch (err) {
    return err;
  }
};
