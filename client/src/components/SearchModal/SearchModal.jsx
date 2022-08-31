import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import getFilterProducts from "../../api/getFilterProducts";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { writeSearchWord } from "../../store/catalog/actions";

const SearchModal = ({ value, activeFocus, setActiveFocus, clearInput }) => {
  const dispatch = useDispatch();
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

  // useEffect(() => {
  //   localStorage.setItem("searchWorld", JSON.stringify(value));
  // }, [foundProducts]);

  return (
    <>
      {activeFocus ? (
        <div className="modal">
          <div className="modal__content">
            {foundProducts.map((product) => {
              count++;
              if (product.name.toLowerCase().includes(value) && count <= 4) {
                console.log(product.productUrl);
                return (
                  <Link
                    to={product.productUrl}
                    className="modal__product"
                    key={product._id}
                    onClick={() => clearInput()}
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
                        to={`/products/filter?categories=mens,ladies,accessories&brand=${value}`}
                        onClick={() => {
                          clearInput();
                          dispatch(writeSearchWord(`${value}`));
                        }}
                        className="modal__btn"
                      >
                        Show all results
                      </Link>
                    </Button>
                  </Box>
                );
              }
            })}
          </div>
        </div>
      ) : (
        ""
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
