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
import Paginations from "./Pagination/Pagination";

const ProductList = () => {
  const { categorieProductList, isLoading, hasError, productsQuntity } =
    useSelector((state) => state.catalog);
  const [isOneCartView, setIsOneCartView] = useState(true);

  return (
    <div className="list-width">
      <div className="productlist-wrapper">
        {!hasError && !isLoading && productsQuntity > 0 && (
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
                className={
                  !isOneCartView ? "active-button view-btn" : "view-btn"
                }
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
                className={
                  isOneCartView ? "active-button view-btn" : "view-btn"
                }
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
        {!hasError && !isLoading && categorieProductList.length === 0 && (
          <Box
            sx={{
              height: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant={"h4"}>
              Sorry, we have nothing to offer you based on these filter
            </Typography>{" "}
          </Box>
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
                to={`/product/${card.itemNo}`}
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
                  viewIsOne={isOneCartView}
                />
              </Link>
            );
          })
        )}
      </div>
      <div className="productlist-wrapper__pagination">
        <Box sx={{ pb: 3 }}>
          {productsQuntity > 10 && !isLoading && <Paginations />}
        </Box>
      </div>
    </div>
  );
};

export default ProductList;
