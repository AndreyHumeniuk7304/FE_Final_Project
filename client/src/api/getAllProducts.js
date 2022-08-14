import axios from "axios";

// export default async function getAllProducts() {
//   const { data } = await axios.get("http://localhost:2000/api/products");
//   return data;
// }

const getAllProducts = () => {
  return fetch("/productList.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((result) => result.json());
};

export default getAllProducts;
