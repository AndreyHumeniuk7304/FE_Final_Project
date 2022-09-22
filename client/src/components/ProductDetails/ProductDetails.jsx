import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import getOneProduct from "../../api/getOneProduct";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import { Add, Favorite, FavoriteBorder, Remove } from "@mui/icons-material";
import theme from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCartItem } from "../../store/cart/actions";
import Subscribe from "../Subscribe/Subscribe";
import {
  addToWishlist,
  deleteWishlistItem,
} from "../../store/wishlist/actions";
import Comments from "../Comments/Comments";

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
      <Container maxwidth="lgDesktop">
        <Box sx={{ borderBottom: "1px solid lightgrey" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              pt: "100px",
              pb: "100px",
              [theme.breakpoints.between("mobile", "desktop")]: {
                display: "block",
                pt: "30px",
                pb: "30px",
              },
            }}
          >
            <Box>
              <Box
                component="img"
                sx={{ maxWidth: "100%", minWidth: "100%" }}
                src={product.imageUrls[0]}
                alt={product.name}
              ></Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                pl: "20px",
                [theme.breakpoints.between("mobile", "desktop")]: {
                  padding: "0",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    textTransform: "uppercase",
                    pr: "10px",
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
                <Box>
                  <Typography
                    sx={{
                      minWidth: "max-content",
                      width: "30%",
                      textAlign: "center",
                      pb: "5px",
                      [theme.breakpoints.between("mobile", "desktop")]: {
                        fontSize: "25px",
                        lineHeight: "19px",
                        mt: "10px",
                        textAlign: "end",
                      },
                    }}
                    variant="h5"
                    component="h5"
                    style={{ color: nightMode ? "#fff" : "#000" }}
                  >
                    {product.currentPrice} $
                  </Typography>
                  {product.previousPrice > product.currentPrice && (
                    <Typography
                      sx={{
                        minWidth: "max-content",
                        width: "30%",
                        textAlign: "center",
                        textDecoration: "line-through",
                        fontWeight: "400",
                        fontSize: "20px",
                        opacity: "0.5",
                        [theme.breakpoints.between("mobile", "desktop")]: {
                          fontSize: "20px",
                          lineHeight: "19px",
                          textAlign: "end",
                        },
                      }}
                      variant="h5"
                      component="h5"
                      style={{ color: nightMode ? "#fff" : "#595959" }}
                    >
                      {product.previousPrice} $
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box>
                <Typography sx={{ pb: "20px", color: "secondary.dark" }}>
                  REF: {product.itemNo}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "secondary.dark",
                  }}
                >
                  Color:{" "}
                  <Typography
                    component="span"
                    style={{ color: nightMode ? "#fff" : "#000" }}
                  >
                    {product.color}
                  </Typography>
                </Typography>
                <Typography variant="h6" sx={{ color: "secondary.dark" }}>
                  Material:{" "}
                  <Typography
                    component="span"
                    style={{ color: nightMode ? "#fff" : "#000" }}
                  >
                    {product.material}
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "secondary.dark", pb: "20px" }}
                >
                  Mechanism:{" "}
                  <Typography
                    component="span"
                    style={{ color: nightMode ? "#fff" : "#000" }}
                  >
                    {product.mechanism}
                  </Typography>
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
                    pb: "20px",
                  }}
                >
                  {product.description}
                </Typography>
                <Box sx={{ pb: "20px" }}>
                  <Typography
                    variable={"body2"}
                    component={"span"}
                    sx={{
                      p: "5px",
                      border: "1px solid grey",
                      borderRadius: "4px",
                    }}
                  >
                    <IconButton
                      onClick={decrease}
                      sx={{ p: "5px" }}
                      color={"secondary"}
                    >
                      <Remove fontSize="small" />
                    </IconButton>
                    {counter}
                    <IconButton
                      onClick={increase}
                      sx={{ p: "5px" }}
                      color={"secondary"}
                    >
                      <Add fontSize="small" />
                    </IconButton>
                  </Typography>
                </Box>
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
                        padding: "16px 30px",
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
              <Subscribe product={product} />
            </Box>
          </Box>
        </Box>
        <Comments id={product._id} />
      </Container>
    </>
  );
};

export default ProductDetails;
