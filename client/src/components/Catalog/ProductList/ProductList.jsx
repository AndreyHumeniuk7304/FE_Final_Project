import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { fetchCategoriesProducts } from "../../../store/catalog/actions";

const ProductList = ({ categories }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchCategoriesProducts(`products/filter?Categories=${categories}`)
    );
  }, [dispatch]);

  const { categorieProductList, isLoading, hasError } = useSelector(
    (state) => state.catalog
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
        categorieProductList.map((card) => {
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
  categories: PropTypes.string,
};

export default ProductList;
