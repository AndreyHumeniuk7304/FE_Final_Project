import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseProductQuantity,
  deleteCartItem,
  increaseProductQuantity,
} from "../../store/cart/actions";
import { Box, Button, IconButton, Typography, Stack } from "@mui/material";
import { Close, Add, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const { product, cartQuantity } = props.item;

  const handleDecrease = () => {
    dispatch(decreaseProductQuantity(product._id, isLogin));
  };

  const handleIncrease = () => {
    dispatch(increaseProductQuantity(product._id, isLogin));
  };

  const deleteItem = () => {
    dispatch(deleteCartItem(product._id, isLogin));
  };

  const openItem = () => {
    navigate(`../product/${product.itemNo}`);
  };

  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        sx={{ width: "100%", position: "relative" }}
      >
        <Box
          component={"img"}
          src={product.imageUrls[0]}
          alt="Product photo"
          onClick={openItem}
          sx={{
            width: "110px",
            height: "180px",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
        <Box
          sx={{
            marginLeft: 1,
            flexBasis: { desktop: "50%" },
            flexGrow: 1,
          }}
        >
          <Typography
            variant={"subtitle1"}
            component={"h3"}
            onClick={openItem}
            sx={{
              fontWeight: 700,
              cursor: "pointer",
            }}
            className="cartItem-name"
          >
            {product.name}
          </Typography>
          <Stack
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={1}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ width: "50%", display: "inline-block" }}
                className="cartItem-price"
              >
                Price
              </Typography>
              <Typography
                variable={"body2"}
                component={"span"}
                className="cartItem-currentPrice"
              >
                {product.currentPrice}$
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ width: "50%", display: "inline-block" }}
                className="cartItem-color"
              >
                Color
              </Typography>
              <Typography
                variable={"body2"}
                component={"span"}
                className="cartItem-currentColor"
              >
                {product.color}
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ width: "50%", display: "inline-block" }}
                className="cartItem-quantity"
              >
                Quantity
              </Typography>
              <Typography
                variable={"body2"}
                component={"span"}
                className="cartItem-quantity"
              >
                <IconButton
                  onClick={handleDecrease}
                  sx={{ padding: "5px" }}
                  color={"secondary"}
                >
                  <Remove fontSize="small" />
                </IconButton>
                {cartQuantity}
                <IconButton
                  onClick={handleIncrease}
                  sx={{ padding: "5px" }}
                  color={"secondary"}
                >
                  <Add fontSize="small" />
                </IconButton>
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ width: "50%", display: "inline-block", fontWeight: 700 }}
                className="cartItem-total"
              >
                Total
              </Typography>
              <Typography
                variable={"body2"}
                component={"span"}
                sx={{ fontWeight: 700 }}
                className="cartItem-totalPrice"
              >
                {product.currentPrice * cartQuantity} $
              </Typography>
            </Box>
          </Stack>
        </Box>
        <IconButton
          onClick={deleteItem}
          color={"secondary"}
          sx={{
            padding: 0,
            display: { desktop: "none" },
          }}
        >
          <Close fontSize="small" />
        </IconButton>
        <Button
          onClick={deleteItem}
          sx={{
            padding: 0,
            alignSelf: "flex-end",
            flexGrow: 1,
            display: { mobile: "none", desktop: "block" },
          }}
        >
          <Typography
            variant={"body2"}
            sx={{
              color: "secondary.main",
            }}
            className="cartItem-remove"
          >
            Remove from basket
          </Typography>
        </Button>
      </Stack>
      <Box
        sx={{
          height: "1px",
          width: "100%",
          bgcolor: "primary.light",
          marginBottom: 3,
        }}
      />
    </>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
