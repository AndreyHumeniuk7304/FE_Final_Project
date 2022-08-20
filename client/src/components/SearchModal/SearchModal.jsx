import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import getFilterProducts from "../../api/getFilterProducts";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Modal = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    top: "120px",
    left: "-123%",
  },
}));

const SearchModal = ({ value, clearInput, activeFocus, setActiveFocus }) => {
  let count = 0;
  const [foundProducts, setFoundProducts] = useState([]);

  useEffect(() => {
    getFilterProducts("products/search", {
      query: value,
    }).then((products) => {
      setFoundProducts(products);
      products.length >= 1 && setActiveFocus(true);
    });
  }, [value]);

  return (
    <>
      {activeFocus ? (
        <Modal className="modal">
          <div className="modal__content">
            {foundProducts.map((product) => {
              count++;
              if (product.name.toLowerCase().includes(value) && count <= 4) {
                return (
                  <Link
                    to={product.productUrl}
                    className="modal__product"
                    key={product._id}
                    onClick={(e) => clearInput(e.target.value)}
                  >
                    <div className="modal__product-img">
                      <img src={product.imageUrls[0]} />
                    </div>
                    <div className="modal__product-wrapper">
                      <div className="modal__product-name">{product.name}</div>

                      <div className="modal__product-price">
                        <span>{product.currentPrice}</span> $
                      </div>
                    </div>
                  </Link>
                );
              }
              if (count == 5) {
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
                        to="/search"
                        onClick={(e) => clearInput(e.target.input)}
                      >
                        Show all results
                      </Link>
                    </Button>
                  </Box>
                );
              }
            })}
          </div>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

SearchModal.propTypes = {
  value: PropTypes.string,
  clearInput: PropTypes.func,
  activeFocus: PropTypes.bool,
  setActiveFocus: PropTypes.func,
};

export default SearchModal;
