import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Catalog from "../../components/Catalog/Catalog";
import { fetchCategoriesProducts } from "../../store/catalog/actions";

const Woman = () => {
  const [search, setSearch] = useSearchParams();

  let querystring = search.toString().slice(27);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchCategoriesProducts(
        `products/filter?Categories=Ladies&${querystring}`
      )
    );
  }, [search.toString()]);

  return (
    <div>
      <Catalog categories={"Ladies"} setSearch={setSearch} search={search} />;
    </div>
  );
};
export default Woman;
