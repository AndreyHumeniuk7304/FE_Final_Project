import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchCategoriesProducts } from "../../store/catalog/actions";
import Filter from "../../components/Catalog/Filter/Filter";
import ProductList from "../../components/Catalog/ProductList/ProductList";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";

const Products = ({ isFilterShow = true, isToggleShow }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    isFilterShow &&
      dispatch(fetchCategoriesProducts(`products/filter${location.search}`));
  }, [location.search]);

  return (
    <Stack direction={{ mobile: "column", desktop: "row" }}>
      {isFilterShow && <Filter />}
      <ProductList isToggleShow={isToggleShow} />
    </Stack>
  );
};
export default Products;

Products.propTypes = {
  isFilterShow: PropTypes.bool,
  isToggleShow: PropTypes.bool,
};
