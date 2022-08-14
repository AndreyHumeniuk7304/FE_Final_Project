import { useDispatch, useSelector } from "react-redux";
import Catalog from "../../components/Catalog/Catalog";
import { fetchCategoriesProducts } from "../../store/catalog/actions";
import { useEffect } from "react";

const Woman = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesProducts("products/filter?Categories=Ladies"));
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
export default Woman;
