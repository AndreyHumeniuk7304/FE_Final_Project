import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography, Container, Grid } from "@mui/material";
import Links from "../Links/Links";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerOrders } from "../../../store/cabinet/actions";

const History = () => {
  const dispatch = useDispatch();
  const stateOrders = useSelector((state) => state.cabinet.purchasesHistory);
  const orders = [...stateOrders].reverse();

  useEffect(() => {
    dispatch(fetchCustomerOrders());
  }, []);
  if (orders?.length === 0) {
    return (
      <div className="profile">
        <Links />
        <div className="empty-block">No purchases were found</div>
      </div>
    );
  }

  return (
    <>
      <Links />
      <Grid
        style={{ maxWidth: 1000, margin: "30px auto" }}
        container
        direction="column"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {orders === undefined ? (
          <span>SORRY CAN`T LOADING</span>
        ) : (
          orders.map((order, index) => (
            <Grid
              item
              style={{
                borderBottom: "2px solid green",
                borderRadius: "5px",
                padding: 10,
                margin: 10,
                height: "auto",
              }}
              key={index}
            >
              <Typography style={{ paddingBottom: "8px" }} variant="h6">
                OrderNo: {order?.orderNo}
              </Typography>
              {order.products.reverse().map((product, key) => (
                <Typography key={key}>
                  <Grid
                    alignItems="center"
                    justifyContent="space-between"
                    direction="row"
                    style={{
                      paddingBottom: 15,
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    container
                  >
                    <Grid item>
                      <Link to={`/product/${product.product?.itemNo}`}>
                        <img
                          style={{ float: "left" }}
                          align="top"
                          width={200}
                          src={product.product?.imageUrls[0]}
                          alt="/"
                        />
                      </Link>
                    </Grid>
                    <Grid
                      item
                      style={{ display: "inline-block", maxWidth: "250px" }}
                    >
                      <Typography> {product.product.name} </Typography>
                    </Grid>
                    <Grid item style={{ display: "inline-block" }}>
                      Quantity: {product.cartQuantity}
                    </Grid>
                    <Grid item style={{ display: "inline-block" }}>
                      Price: {product.product.currentPrice}$
                    </Grid>
                  </Grid>
                </Typography>
              ))}
              <Typography variant="h6">
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  direction="row"
                >
                  <Grid item>{order?.status}</Grid>
                  <Grid item>Total: {order?.totalSum}$</Grid>
                </Grid>
              </Typography>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};
export default History;
