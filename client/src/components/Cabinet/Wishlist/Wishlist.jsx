import Links from "../Links/Links";
import Catalog from "../../Catalog/Catalog";
import { useEffect } from "react";
import { loadedCategorieProducts } from "../../../store/catalog/actions";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.list);

  const wishlistObj = {
    products: wishlist,
    productsQuntity: wishlist.length,
  };

  useEffect(() => {
    dispatch(loadedCategorieProducts(wishlistObj));
  }, [wishlistObj]);

  return (
    <>
      <Links /> <Catalog isFilterShow={false} isToggleShow={false} />
    </>
  );
};
export default Wishlist;
