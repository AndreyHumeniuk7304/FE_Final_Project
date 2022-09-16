import Filter from "./Filter/Filter";
import ProductList from "./ProductList/ProductList";
import PropTypes from "prop-types";

const Catalog = ({ isFilterShow = true }) => {
  return (
    <div className="catalog-container">
      {isFilterShow && <Filter />}
      <ProductList />
    </div>
  );
};

export default Catalog;

Catalog.propTypes = {
  isFilterShow: PropTypes.bool,
};
