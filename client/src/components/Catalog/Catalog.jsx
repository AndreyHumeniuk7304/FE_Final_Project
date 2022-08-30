import Filter from "./Filter/Filter";
import ProductList from "./ProductList/ProductList";
import PropTypes from "prop-types";

const Catalog = () => {
  return (
    <div className="catalog-container">
      <Filter />
      <ProductList />
    </div>
  );
};

export default Catalog;
