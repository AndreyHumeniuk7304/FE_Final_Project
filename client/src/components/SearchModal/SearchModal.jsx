import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import getFilterProducts from "../../api/getFilterProducts";
import { styled } from "@mui/material/styles";

const Modal = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    top: "120px",
    left: "-123%",
  },
}));

const SearchModal = ({ value, clearInput }) => {
  let count = 1;
  const [foundProducts, setFoundProducts] = useState([]);
  const [activeFocus, setActiveFocus] = useState([]);

  useEffect(() => {
    getFilterProducts("products/search", {
      query: document.querySelector("#standard-basic").value,
    }).then((products) => setFoundProducts(products));
  }, [value]);

  useEffect(() => {
    document.addEventListener("click", () => {
      if (document.querySelector("#standard-basic") == document.activeElement) {
        setActiveFocus(true);
      } else {
        setActiveFocus(false);
      }
    });
  }, []);

  return (
    <>
      {activeFocus ? (
        <Modal className="modal">
          <div className="modal__content">
            {foundProducts.map((product) => {
              if (product.name.toLowerCase().includes(value) && count <= 4) {
                count++;
                return (
                  <Link
                    to={product.productUrl}
                    className="modal__product"
                    key={product._id}
                    onClick={clearInput}
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
};

export default SearchModal;
