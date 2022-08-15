import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: "http://localhost:3001/api",
});

export const getOneProduct = async (itemNo) => {
  try {
    const { data } = await axios.post(`/products/${itemNo}`);
    return data;
  } catch (err) {
    return err;
  }
};
