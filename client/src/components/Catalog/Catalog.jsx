import Filter from "./Filter/Filter";
import ProductList from "./ProductList/ProductList";
import PropTypes from "prop-types";

const Catalog = ({ setSearch, search, categories }) => {
  return (
    <div className="catalog-container">
      <Filter setSearch={setSearch} search={search} categories={categories} />
      <ProductList />
    </div>
  );
};

Catalog.propTypes = {
  setSearch: PropTypes.func,
  search: PropTypes.object,
  categories: PropTypes.string,
};

export default Catalog;
