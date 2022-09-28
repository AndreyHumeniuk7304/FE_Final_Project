import {
  addProductToWishlist,
  deleteProductFromWishlist,
  getWishlist,
} from "../../api/wishlist";

export const addToWishlist = (id) => async (dispatch) => {
  try {
    const wishlist = await addProductToWishlist(id);
    dispatch({
      type: "SET_WISHLIST",
      payload: wishlist ? wishlist.products : [],
    });
  } catch (err) {
    dispatch({
      type: "SET_WISHLIST",
      payload: [],
    });
  }
};

export const deleteWishlistItem = (id) => async (dispatch) => {
  try {
    const newWishlist = await deleteProductFromWishlist(id);
    dispatch({
      type: "SET_WISHLIST",
      payload: newWishlist ? newWishlist.products : [],
    });
  } catch (err) {
    dispatch({
      type: "SET_WISHLIST",
      payload: [],
    });
  }
};

export const getWishlistItem = () => async (dispatch) => {
  try {
    const wishlistItem = await getWishlist();
    dispatch({
      type: "SET_WISHLIST",
      payload: wishlistItem ? wishlistItem.products : [],
    });
  } catch (err) {
    dispatch({
      type: "SET_WISHLIST",
      payload: [],
    });
  }
};
