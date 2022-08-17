import { useSelector } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductList = ({ categorieProducts }) => {
  const isLoading = useSelector((state) => state.catalog.isLoading);
  const hasError = useSelector((state) => state.catalog.hasError);
  const categorieProductList = useSelector(
    (state) => state.catalog.categorieProductList
  );

  return (
    <div className="productlist-wrapper">
      {categorieProductList.length === 0 && (
        <span>Sorry, we have nothing to offer you based on these filter</span>
      )}
      {hasError ? (
        <span>Opps, error! Please, try again!</span>
      ) : isLoading ? (
        <span className="">Loading...</span>
      ) : (
        categorieProducts.map((card) => {
          return (
            <Link
              to={card.productUrl}
              className="productlist-wrapper__card"
              key={card._id}
            >
              <ProductCard
                image={card.imageUrls[0]}
                name={card.name}
                price={card.currentPrice}
              />
            </Link>
          );
        })
      )}
    </div>
  );
};

ProductList.propTypes = {
  categorieProducts: PropTypes.array,
};

export default ProductList;
