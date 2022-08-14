import axios from "axios";

export const getOneProduct = async (itemNo) => {
  try {
    const { data } = await axios.post(`/products/${itemNo}`);
    return data;
  } catch (err) {
    return err;
  }
};
