import Filter from "./Filter/Filter";
import ProductList from "./ProductList/ProductList";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";

const Catalog = ({ isFilterShow = true }) => {
  return (
    <Stack direction={{ mobile: "column", desktop: "row" }}>
      {isFilterShow && <Filter />}
      <ProductList />
    </Stack>
  );
};

export default Catalog;

Catalog.propTypes = {
  isFilterShow: PropTypes.bool,
};
