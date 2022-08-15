import axios from "axios";

export default async function getOneProduct(itemNo) {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/api/products/${itemNo}`
    );
    return data;
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
