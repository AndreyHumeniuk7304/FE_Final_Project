import Filter from "./Filter/Filter";
import ProductList from "./ProductList/ProductList";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Catalog = ({ categorieProducts, categories }) => {
  const isLoading = useSelector((state) => state.catalog.isLoading);

  return (
    !isLoading && (
      <div className="catalog-container">
        <Filter categories={categories} />
        <ProductList categorieProducts={categorieProducts} />
      </div>
    )
  );
};

Catalog.propTypes = {
  categorieProducts: PropTypes.array,
  categories: PropTypes.string,
};

export default Catalog;
