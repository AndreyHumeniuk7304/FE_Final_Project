import axios from "axios";

export default async function getAllProductsToRender() {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  const { data } = await axios.get(
    `http://localhost:3001/api/products`,
    config
  );
  return data;
}
