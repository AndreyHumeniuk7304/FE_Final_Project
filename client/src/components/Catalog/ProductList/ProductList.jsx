import { useSelector } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";

const ProductList = () => {
  const { categorieProductList, isLoading, hasError } = useSelector(
    (state) => state.catalog
  );
  const [isOneCartView, setIsOneCartView] = useState(true);

  return (
    <div className="productlist-wrapper">
      {!hasError && !isLoading && (
        <Box
          sx={{
            display: "flex",
            margin: 1,
          }}
          className="productlist-wrapper__view"
        >
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            orientation="vertical"
          >
            <Button
              type="submit"
              onClick={() => {
                setIsOneCartView(false);
              }}
              className={!isOneCartView ? "active-button view-btn" : "view-btn"}
            >
              <img
                className="productlist-wrapper__img"
                src="../images/square.png"
                alt="one card view"
              />
            </Button>
            <Button
              type="submit"
              onClick={() => {
                setIsOneCartView(true);
              }}
              className={isOneCartView ? "active-button view-btn" : "view-btn"}
            >
              <img
                className="productlist-wrapper__img"
                src="../images/squares.png"
                alt="two cards view"
              />
            </Button>
          </ButtonGroup>
        </Box>
      )}

      {categorieProductList.length === 0 && (
        <span>Sorry, we have nothing to offer you based on these filter</span>
      )}
      {hasError ? (
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant={"h3"}>Error! Try again!</Typography>{" "}
        </Box>
      ) : isLoading ? (
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant={"h3"}>
            Loading <CircularProgress />
          </Typography>
        </Box>
      ) : (
        categorieProductList.map((card) => {
          return (
            <Link
              to={card.productUrl}
              className={
                isOneCartView
                  ? "productlist-wrapper__card-two"
                  : "productlist-wrapper__card-one"
              }
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

export default ProductList;
