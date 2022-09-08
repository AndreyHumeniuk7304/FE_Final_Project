import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import getOneProduct from "../../api/getOneProduct";
import "./ProductDetails.scss";
import { Box, Button, Checkbox, Rating, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import theme from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCartItem } from "../../store/cart/actions";
import Subscribe from "../Subscribe/Subscribe";
import {
  addToWishlist,
  deleteWishlistItem,
} from "../../store/wishlist/actions";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [counter, setCounter] = useState(1);
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const isAdmin = useSelector((state) => state.userAccount.customer.isAdmin);
  const cart = useSelector((state) => state.cart.list);
  const nightMode = useSelector((state) => state.nightMode);
  const { itemNo } = useParams();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.list);
  let isFavorite = wishlist.some((item) => item.itemNo === itemNo);
  let isInCart = cart.some((item) => item.product.itemNo === itemNo);
  useEffect(() => {
    getOneProduct(itemNo).then((data) => setProduct(data));
  }, [itemNo]);
  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const increase = () => {
    if (counter < 9) {
      setCounter(counter + 1);
    }
  };

  const handleCartClick = () => {
    isInCart
      ? dispatch(deleteCartItem(product._id, isLogin))
      : dispatch(addToCart(product._id, itemNo, counter, isLogin));
    isInCart = !isInCart;
  };

  const handleWishlistClick = () => {
    isFavorite
      ? dispatch(deleteWishlistItem(product._id))
      : dispatch(addToWishlist(product._id));
    isFavorite = !isFavorite;
  };

  const updateProductClick = () => {
    navigate(`/product/${itemNo}/update`);
  };
  if (!product) return null;

  return (
    <>
      <Box className="background">
        <Box
          className="details container"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "100px",
            paddingBottom: "100px",
            [theme.breakpoints.between("mobile", "desktop")]: {
              display: "block",
              paddingTop: "50px",
              paddingBottom: "50px",
            },
          }}
        >
          <Box>
            <img
              className="details__img"
              src={product.imageUrls[0]}
              alt={product.name}
            />
          </Box>
          <Box
            className="details__item"
            sx={{
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                className="details__item-title"
                variant="h5"
                component="h5"
                sx={{
                  [theme.breakpoints.between("mobile", "desktop")]: {
                    fontSize: "14px",
                    lineHeight: "19px",
                    mt: "10px",
                  },
                }}
                style={{ color: nightMode ? "#fff" : "#000" }}
              >
                {product.name}
              </Typography>
              <Typography
                sx={{
                  minWidth: "max-content",
                  width: "30%",
                  textAlign: "center",
                  [theme.breakpoints.between("mobile", "desktop")]: {
                    fontSize: "14px",
                    lineHeight: "19px",
                    mt: "10px",
                    textAlign: "end",
                  },
                }}
                className="details__item-title"
                variant="h5"
                component="h5"
                style={{ color: nightMode ? "#fff" : "#000" }}
              >
                {product.currentPrice} $
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ paddingBottom: "20px", color: "secondary.dark" }}
              >
                REF: {product.itemNo}
              </Typography>
              <Rating name="size-small" defaultValue={5} size="small" />
              <Typography
                variant="h6"
                sx={{
                  color: "secondary.dark",
                }}
              >
                Color:{" "}
                <span
                  className="details__item-color"
                  style={{ color: nightMode ? "#fff" : "#000" }}
                >
                  {product.color}
                </span>
              </Typography>
              <Typography variant="h6" sx={{ color: "secondary.dark" }}>
                Material:{" "}
                <span
                  className="details__item-color"
                  style={{ color: nightMode ? "#fff" : "#000" }}
                >
                  {product.material}
                </span>
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "secondary.dark", paddingBottom: "20px" }}
              >
                Mechanism:{" "}
                <span
                  className="details__item-color"
                  style={{ color: nightMode ? "#fff" : "#000" }}
                >
                  {product.mechanism}
                </span>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  [theme.breakpoints.between("mobile", "desktop")]: {
                    lineHeight: "19px",
                    fontSize: "14px",
                  },
                  fontWeight: "700",
                }}
              >
                Details
              </Typography>
              <Typography
                sx={{
                  [theme.breakpoints.between("mobile", "desktop")]: {
                    lineHeight: "16px",
                  },
                  fontSize: "12px",
                  color: "secondary.dark",
                  lineHeight: "20px",
                  paddingBottom: "20px",
                }}
              >
                {product.description}
              </Typography>
              <div className="counter">
                <button onClick={decrease} className="counter__button">
                  -
                </button>
                <span className="counter__span">{counter}</span>
                <button onClick={increase} className="counter__button">
                  +
                </button>
              </div>
              <Box
                sx={{
                  [theme.breakpoints.between("mobile", "desktop")]: {
                    display: "flex",
                  },
                }}
              >
                {isAdmin ? (
                  <Button
                    onClick={updateProductClick}
                    variant="contained"
                    sx={{
                      [theme.breakpoints.between("mobile", "desktop")]: {
                        padding: "12px 70px",
                        fontSize: "16px",
                        lineHeight: "25px",
                      },
                      backgroundColor: "primary.dark",
                      padding: "16px 60px",
                      mr: "40px",
                      fontSize: "18px",
                      lineHeight: "25px",
                    }}
                  >
                    Update Product
                  </Button>
                ) : (
                  <Button
                    onClick={handleCartClick}
                    variant="contained"
                    sx={{
                      [theme.breakpoints.between("mobile", "desktop")]: {
                        fontSize: "16px",
                        lineHeight: "25px",
                      },
                      backgroundColor: "primary.dark",
                      padding: "16px 60px",
                      mr: "40px",
                      fontSize: "18px",
                      lineHeight: "25px",
                    }}
                  >
                    {isInCart ? "REMOVE FROM CART" : "ADD TO CART"}
                  </Button>
                )}
                {isLogin && (
                  <Checkbox
                    checked={isFavorite}
                    onClick={handleWishlistClick}
                    icon={
                      <FavoriteBorder
                        sx={{
                          [theme.breakpoints.between("mobile", "desktop")]: {
                            fontSize: "35px",
                          },
                          color: "primary.dark",
                          fontSize: "35px",
                        }}
                      />
                    }
                    checkedIcon={
                      <Favorite
                        sx={{ color: "primary.dark", fontSize: "35px" }}
                      />
                    }
                  />
                )}
              </Box>
              <Box></Box>
            </Box>
            <Subscribe itemNo={itemNo} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
