import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Catalog from "../../components/Catalog/Catalog";
import { fetchCategoriesProducts } from "../../store/catalog/actions";

const Accessory = () => {
  const [search, setSearch] = useSearchParams();

  let querystring = search.toString().slice(32);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchCategoriesProducts(
        `products/filter?categories=Accessories&${querystring}`
      )
    );
  }, [search.toString()]);

  return (
    <div>
      <Catalog
        categories={"Accessories"}
        setSearch={setSearch}
        search={search}
      />
    </div>
  );
};
export default Accessory;
