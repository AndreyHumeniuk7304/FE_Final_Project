import axios from "../ulits/instance/instance";

export default async function getOneProduct(itemNo) {
  try {
    const { data } = await axios.get(`/products/${itemNo}`);
    return data;
  } catch (e) {
    console.log(e);
  }
}
