import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Catalog from "../../components/Catalog/Catalog";
import { fetchCategoriesProducts } from "../../store/catalog/actions";

const Products = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchCategoriesProducts(`products/filter${location.search}`));
  }, [location.search]);

  return (
    <div>
      <Catalog />
    </div>
  );
};
export default Products;
