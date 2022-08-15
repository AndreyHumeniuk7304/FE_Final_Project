import Filter from "./Filter/Filter";
import ProductList from "./ProductList/ProductList";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Catalog = ({ categories }) => {
  const isLoading = useSelector((state) => state.catalog.isLoading);

  return (
    <div className="catalog-container">
      <Filter categories={categories} />
      <ProductList categories={categories} />
    </div>
  );
};

Catalog.propTypes = {
  categories: PropTypes.string,
};

export default Catalog;
