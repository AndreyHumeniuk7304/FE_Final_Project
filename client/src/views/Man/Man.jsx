import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Catalog from "../../components/Catalog/Catalog";
import { fetchCategoriesProducts } from "../../store/catalog/actions";

const Man = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesProducts("products/filter?Categories=Mens"));
  }, [dispatch]);
  const categorieProductList = useSelector(
    (state) => state.catalog.categorieProductList
  );
  return (
    <div>
      <Catalog categorieProducts={categorieProductList} />
    </div>
  );
};
export default Man;
