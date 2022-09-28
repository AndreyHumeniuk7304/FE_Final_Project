import { useSelector } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Typography,
  CircularProgress,
  Button,
  ButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import Paginations from "./Pagination/Pagination";

const ProductList = ({ isToggleShow }) => {
  const { categorieProductList, isLoading, hasError, productsQuntity } =
    useSelector((state) => state.catalog);
  const [isOneCartView, setIsOneCartView] = useState(true);

  const isToggleShows = (value) => {
    if (value !== false) return true;
  };

  return (
    <Box sx={{ width: "100%" }}>
      {!hasError &&
        !isLoading &&
        productsQuntity > 0 &&
        isToggleShows(isToggleShow) && (
          <Box
            sx={{
              display: "flex",
              marginTop: "2%",
              alignItems: "center",
              float: "right",
              marginRight: "2%",
              marginBottom: "1%",
            }}
          >
            <Box
              sx={{
                marginRight: "5%",
                marginTop: { mobile: "-18%", desktop: "0%" },
              }}
            >
              Switcher:
            </Box>
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              sx={{
                display: { mobile: "flex", desktop: "flex" },
                marginTop: { mobile: "-18%", desktop: "0%" },
              }}
            >
              <Button
                type="submit"
                onClick={() => {
                  setIsOneCartView(false);
                }}
                sx={{
                  padding: 0.2,
                  color: !isOneCartView && "rgb(197, 190, 190)",
                  fontWeight: !isOneCartView && "bold",
                }}
              >
                One
              </Button>
              <Button
                type="submit"
                onClick={() => {
                  setIsOneCartView(true);
                }}
                sx={{
                  padding: 0.2,
                  color: isOneCartView && "rgb(197, 190, 190)",
                  fontWeight: isOneCartView && "bold",
                }}
              >
                Two
              </Button>
            </ButtonGroup>
          </Box>
        )}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
          width: "100%",
          position: "relative",
          gap: "4%",
        }}
      >
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
                style={{
                  width: isOneCartView ? "43%" : "70%",
                  marginTop: "2%",
                  marginBottom: "3%",
                  borderRadius: "10px",
                }}
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
            marginTop: "3%",
            pb: 3,
          }}
        >
          {productsQuntity > 10 && !isLoading && <Paginations />}
        </Box>
      </Box>
    </Box>
  );
};

ProductList.propTypes = {
  isToggleShow: PropTypes.bool,
};

export default ProductList;
