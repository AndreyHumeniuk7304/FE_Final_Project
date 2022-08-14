import { useDispatch, useSelector } from "react-redux";
import Catalog from "../../components/Catalog/Catalog";
import { fetchCategoriesProducts } from "../../store/catalog/actions";
import { useEffect } from "react";

const Accessory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesProducts("products/filter?Categories=Accessories"));
  }, [dispatch]);
  const categorieProductList = useSelector(
    (state) => state.catalog.categorieProductList
  );
  return (
    <div>
      <Catalog categorieProducts={categorieProductList} />;
    </div>
  );
};
export default Accessory;
