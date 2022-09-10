import Filter from "./Filter/Filter";
import Paginations from "./ProductList/Pagination/Pagination";
import ProductList from "./ProductList/ProductList";

/* code review: good
    компонент розділений на логічні частини
 */

const Catalog = () => {
  return (
    <div className="catalog-container">
      <Filter />
      <ProductList />
    </div>
  );
};

export default Catalog;
