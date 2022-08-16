import Filter from "./Filter/Filter";
import ProductList from "./ProductList/ProductList";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

const Catalog = ({ categories }) => {
  const [search, setSearch] = useSearchParams();
  let querystring = search.toString().slice(20);
  return (
    <div className="catalog-container">
      <Filter categories={categories} setSearch={setSearch} />
      <ProductList querystring={querystring ? querystring : categories} />
    </div>
  );
};

Catalog.propTypes = {
  categories: PropTypes.string,
};

export default Catalog;
