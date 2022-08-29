import Catalog from "../../components/Catalog/Catalog";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchAllProducts } from "../../store/catalog/actions";
import { useDispatch } from "react-redux";

const UpdateProducts = () => {
  const [search, setSearch] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return <Catalog setSearch={setSearch} search={search} />;
};

export default UpdateProducts;
