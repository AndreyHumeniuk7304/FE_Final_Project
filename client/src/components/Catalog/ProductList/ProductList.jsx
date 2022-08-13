import { useSelector } from "react-redux";
import { filterProductsByCartegory } from "../../../ulits/helpers/helpers";
import ProductCard from "./ProductCard/ProductCard";
import PropTypes from "prop-types";

const ProductList = ({ category }) => {
  const productList = useSelector((state) => state.catalog.productList);
  const isLoading = useSelector((state) => state.catalog.isLoading);
  const hasError = useSelector((state) => state.catalog.hasError);

  return (
    <div className="productlist-wrapper">
      {hasError ? (
        <span>Opps, error! Please, try again!</span>
      ) : isLoading ? (
        <span className="">Loading...</span>
      ) : (
        filterProductsByCartegory(productList, category).map((card) => {
          return (
            <ProductCard
              key={card._id}
              image={card.imageUrls[0]}
              name={card.name}
              price={card.currentPrice}
            />
          );
        })
      )}
    </div>
  );
};

ProductList.propTypes = {
  category: PropTypes.string,
};

export default ProductList;
