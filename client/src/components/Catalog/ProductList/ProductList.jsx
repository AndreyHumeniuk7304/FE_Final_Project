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
import Sort from "../Filter/Sort/Sort";

const ProductList = () => {
  const { categorieProductList, isLoading, hasError, productsQuntity } =
    useSelector((state) => state.catalog);
  const [isOneCartView, setIsOneCartView] = useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          width: "100%",
          position: "relative",
          gap: "4%",
        }}
      >
        {!hasError && !isLoading && productsQuntity > 0 && (
          <Box
            sx={{
              width: "10%",
              display: "flex",
              margin: 1,
              position: "absolute",
              top: "0%",
              left: "0%",
            }}
          >
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              orientation="vertical"
            >
              <Box
                type="submit"
                onClick={() => {
                  setIsOneCartView(false);
                }}
                sx={{
                  pd: "18% 0%",
                  minWidth: "10%",
                  backgroundColor: !isOneCartView && "rgb(197, 190, 190)",
                }}
              >
                <Box
                  component="img"
                  alt="one card view"
                  src="../images/square.png"
                />
              </Box>
              <Box
                type="submit"
                onClick={() => {
                  setIsOneCartView(true);
                }}
                sx={{
                  pd: "18% 0%",
                  minWidth: "10%",
                  backgroundColor: isOneCartView && "rgb(197, 190, 190)",
                }}
              >
                <Box
                  component="img"
                  alt="two cards view"
                  src="../images/squares.png"
                />
              </Box>
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
                style={{ width: isOneCartView ? "43%" : "70%" }}
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
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1%",
            pb: 3,
          }}
        >
          {productsQuntity > 10 && !isLoading && <Paginations />}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
