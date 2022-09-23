import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { writeSearchWord } from "../../store/catalog/actions";
import { getFoundProducts } from "../../api/searchProduct";
import { Box, Button } from "@mui/material";
import theme from "../../theme";

const SearchModal = ({ value, activeFocus, setActiveFocus, clearInput }) => {
  const dispatch = useDispatch();
  const [foundProducts, setFoundProducts] = useState([]);

  useEffect(() => {
    getFoundProducts(value).then((products) => {
      setFoundProducts(products);
      products.length >= 1 && setActiveFocus(true);
    });
  }, [value]);

  const getProducts = () => {
    return foundProducts.map((product, index) => {
      if (
        product.name.toLowerCase().includes(value.toLowerCase()) &&
        index <= 3
      ) {
        return (
          <Link
            to={product.productUrl}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              width: "320px",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            key={product._id}
            onClick={() => clearInput()}
          >
            <Box sx={{ flex: "0 1 30%" }}>
              <Box
                sx={{ width: "100%" }}
                component={"img"}
                src={product.imageUrls[0]}
              />
            </Box>
            <Box sx={{ flex: "0 1 70%" }}>
              <Box sx={{ padding: "0 0 20px 0", color: "black" }}>
                {product.name}
              </Box>

              <Box sx={{ color: "black" }}>
                <Box
                  sx={{ display: "inline", color: "black", fontWeight: "bold" }}
                >
                  {product.currentPrice}
                </Box>
                $
              </Box>
            </Box>
          </Link>
        );
      }
      if (index == 4) {
        return (
          <Box textAlign="center" key={"button"}>
            <Button
              variant="text"
              sx={{
                color: "#000",
                margin: "10px auto",
              }}
            >
              <Link
                to={`/products/filter?categories=mens,ladies,accessories&brand=${value}`}
                onClick={() => {
                  clearInput();
                  dispatch(writeSearchWord(`${value}`));
                }}
                style={{ color: "#000" }}
              >
                Show all results
              </Link>
            </Button>
          </Box>
        );
      }
    });
  };

  return (
    <>
      {activeFocus && (
        <Box
          className="modal"
          sx={{
            backgroundColor: "#fff",
            position: "fixed",
            top: "80px",
            left: "55%",
            zIndex: 10,
            border: "1px solid black",
            borderRadius: "10px",
            [theme.breakpoints.down("desktop")]: {
              top: "140px",
              left: " calc(50% - 160px)",
            },
          }}
        >
          <Box>{getProducts()}</Box>
        </Box>
      )}
    </>
  );
};

SearchModal.propTypes = {
  value: PropTypes.string,
  activeFocus: PropTypes.bool,
  setActiveFocus: PropTypes.func,
  clearInput: PropTypes.func,
};

export default SearchModal;
