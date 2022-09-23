import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import theme from "../../theme";

const HomeNovelties = () => {
  const categorieProductList = useSelector(
    (state) => state.catalog.categorieProductList
  );
  const newProducts = categorieProductList.filter((product) => product.isNew);

  const getOneProduct = (index) => {
    return (
      <Box
        sx={{
          width: "100%",
          position: "relative",
          height: index == 0 ? "615px" : "300px",
        }}
      >
        <Link to={newProducts[index].productUrl} style={{ width: "100%" }}>
          <Box
            component={"img"}
            sx={{
              width: "100%",
              height: index == 0 ? "615px" : "300px",
              objectFit: "cover",
            }}
            src={newProducts[index].imageUrls[0]}
            alt={newProducts[index].name.split(" ").slice(0, 2).join(" ")}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "0px",
              left: "0px",
              padding: "20px 30px 20px",
              backgroundColor: " rgba(0, 0, 0, 0.5)",
              fontWeight: "bold",
              textAlign: "center",
              [theme.breakpoints.down("desktop")]: {
                padding: "15px 0px 15px",
                fontSize: "12px",
                width: "80%",
              },
            }}
          >
            <Box>
              {newProducts[index].name.split(" ").slice(0, 2).join(" ")}
            </Box>
          </Box>
        </Link>
      </Box>
    );
  };

  const getNewProducts = () => {
    return (
      <Stack
        direction="row"
        spacing={2}
        sx={{ padding: "30px 10px 10px 10px" }}
      >
        {getOneProduct(0)}
        <Stack spacing={2} sx={{ width: "100%" }}>
          {getOneProduct(1)}
          {getOneProduct(2)}
        </Stack>
      </Stack>
    );
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "100px auto 100px",
          [theme.breakpoints.down("desktop")]: {
            margin: "50px auto 50px",
          },
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            margin: "0 0 0px 50px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          NEW COLLECTION
        </Typography>
        {newProducts.length === 3 && getNewProducts()}
      </Box>
    </>
  );
};

export default HomeNovelties;
