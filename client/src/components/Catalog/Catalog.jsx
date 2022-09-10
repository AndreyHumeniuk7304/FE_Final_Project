import Filter from "./Filter/Filter";
import ProductList from "./ProductList/ProductList";

const Catalog = () => {
  return (
    <div className="catalog-container">
      <Filter />
      <ProductList />
    </div>
  );
};

export default Catalog;
