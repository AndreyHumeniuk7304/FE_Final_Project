import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: "http://localhost:3001/api",
});

const token = localStorage.getItem("login");

if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

export const createCart = async (products) => {
  try {
    const { data } = await axios.post("/cart", { products });
    return data;
  } catch (err) {
    return err;
  }
};

export const updateCart = async (products) => {
  try {
    const { data } = await axios.put("/cart", { products });
    return data;
  } catch (err) {
    return err;
  }
};

export const addProductToCart = async (productID) => {
  try {
    const { data } = await axios.put(`/cart/${productID}`);
    return data;
  } catch (err) {
    return err;
  }
};

export const decreaseQuantity = async (productID) => {
  try {
    const { data } = await axios.delete(`/cart/product/${productID}`);
    return data;
  } catch (err) {
    return err;
  }
};

export const deleteProduct = async (productID) => {
  try {
    const { data } = await axios.delete(`/cart/${productID}`);
    return data;
  } catch (err) {
    return err;
  }
};

export const getCart = async () => {
  try {
    const { data } = await axios.get("/cart");
    return data;
  } catch (err) {
    return err;
  }
};

export const deleteCart = async () => {
  try {
    const { data } = await axios.delete("/cart");
    return data;
  } catch (err) {
    return err;
  }
};
