import Filter from "./Filter/Filter";
import ProductList from "./ProductList/ProductList";
import PropTypes from "prop-types";

const Catalog = ({ categorieProducts }) => {
  return (
    <div className="catalog-container">
      <Filter />
      <ProductList categorieProducts={categorieProducts} />
    </div>
  );
};

Catalog.propTypes = {
  categorieProducts: PropTypes.array,
};

export default Catalog;
