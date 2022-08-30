import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import Catalog from "../../components/Catalog/Catalog";
import { fetchCategoriesProducts } from "../../store/catalog/actions";
import { setUrl } from "../../store/url/actions";

const Products = () => {
  const { filter } = useParams();
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    dispatch(fetchCategoriesProducts(`products/filter?${search.toString()}`));
    dispatch(setUrl(search.toString()));
  }, [filter]);

  return (
    <div>
      <Catalog />
    </div>
  );
};
export default Products;
