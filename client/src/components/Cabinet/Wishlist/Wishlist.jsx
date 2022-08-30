import Links from "../Links/Links";
import Catalog from "../../Catalog/Catalog";
import { useEffect } from "react";
import { loadedCategorieProducts } from "../../../store/catalog/actions";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.list);
  useEffect(() => {
    dispatch(loadedCategorieProducts(wishlist));
  }, [wishlist]);
  return (
    <>
      <Links /> <Catalog />
    </>
  );
};
export default Wishlist;
