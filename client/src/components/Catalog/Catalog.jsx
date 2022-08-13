import Filter from "./Filter/Filter";
import ProductList from "./ProductList/ProductList";
import PropTypes from "prop-types";

const Catalog = ({ category }) => {
  return (
    <div className="catalog-container">
      <Filter />
      <ProductList category={category} />
    </div>
  );
};

Catalog.propTypes = {
  category: PropTypes.string,
};

export default Catalog;
