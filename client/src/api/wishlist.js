import axios from "../ulits/instance/instance";

export const addProductToWishlist = async (productID) => {
  const { data } = await axios.put(`/wishlist/${productID}`);
  return data;
};

// export const createWishlist = async (products) => {
//   const { data } = await axios.post("/wishlist", { products });
//   return data;
// };

// export const updateWishlist = async (products) => {
//   const { data } = await axios.put("/wishlist", { products });
//   return data;
// };

//
export const deleteProductFromWishlist = async (productID) => {
  const { data } = await axios.delete(`/wishlist/${productID}`);
  return data;
};

export const getWishlist = async () => {
  const { data } = await axios.get("/wishlist");
  return data;
};
//
// export const deleteWishlist = async () => {
//   const { data } = await axios.delete("/wishlist");
//   return data;
// };
