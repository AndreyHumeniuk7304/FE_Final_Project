import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: "http://localhost:5000/api",
});
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWZkNDMzNjExMDllMzU0MDhmNDc3ZCIsImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDIzMTg0NywiZXhwIjoxNjYwMjY3ODQ3fQ.lNjhZzxYKg6j5TZsNigeT_c4EXikbreZ1LwggkO_VEo";

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
