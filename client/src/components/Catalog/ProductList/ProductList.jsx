import { useSelector } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";

const ProductList = () => {
  const productList = useSelector((state) => state.catalog.productList);
  const isLoading = useSelector((state) => state.catalog.isLoading)
  const hasError = useSelector((state) => state.catalog.hasError)

  return (
    <div className="productlist-wrapper">
      {hasError ? (
        <span>Opps, error! Please, try again!</span>
      ) : isLoading ? (
        <span className="">Loading...</span>
      ) : (
        productList.map((card) => {
          return (
            <ProductCard
              key={card.id}
            />
          );
        })
      )}
    </div>
  );
};
export default ProductList;
