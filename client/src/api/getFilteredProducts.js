import axios from "axios";

export async function getFilteredProducts(filter) {
  const { data } = await axios.get(
    `http://localhost:6000/api/products/${filter}`
  );
  return data;
}
