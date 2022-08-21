import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Catalog from "../../components/Catalog/Catalog";
import { fetchCategoriesProducts } from "../../store/catalog/actions";

const Man = () => {
  const [search, setSearch] = useSearchParams();

  let querystring = search.toString().slice(25);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchCategoriesProducts(`products/filter?Categories=Mens&${querystring}`)
    );
  }, [search.toString()]);

  return (
    <div>
      <Catalog categories={"Mens"} setSearch={setSearch} search={search} />
    </div>
  );
};
export default Man;
