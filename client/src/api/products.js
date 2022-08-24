import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: "http://localhost:3001/api",
});

export const createCart = async (products) => {
  try {
    const { data } = await axios.post("/cart", { products });
    return data;
  } catch (err) {
    return err;
  }
};
