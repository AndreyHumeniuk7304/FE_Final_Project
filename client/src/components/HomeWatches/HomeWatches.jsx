import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import theme from "../../theme";

const HomeCategory = () => {
  const categorieProductList = useSelector(
    (state) => state.catalog.categorieProductList
  );

  const getPopularProducts = () => {
    let count = 0;

    return categorieProductList.map((product) => {
      return (
        product.isPopular && (
          <Box
            key={product._id}
            sx={{
              position: "relative",
              flex: ++count < 4 ? "0 1 33.333%" : "0 1 50%",
              boxSizing: "border-box",
              padding: "10px",
            }}
          >
            <Link to={product.productUrl} style={{ width: "100%" }}>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "12.5px",
                  left: "10px",
                  padding: "20px 30px 20px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  [theme.breakpoints.down("desktop")]: {
                    padding: "15px 0px 15px",
                    fontSize: "12px",
                    width: "80%",
                  },
                }}
              >
                <Box
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {product.name.split(" ").slice(0, 2).join(" ")}
                </Box>
              </Box>
              <Box
                component={"img"}
                sx={{ width: "100%", height: "300px", objectFit: "cover" }}
                src={product.imageUrls[0]}
                alt={product.name.split(" ").slice(0, 2).join(" ")}
              />
            </Link>
          </Box>
        )
      );
    });
  };

  return (
    <>
      <Box sx={{ maxWidth: "1220px", margin: "0 auto" }}>
        <Typography
          sx={{
            position: "relative",
            display: "inline-block",
            margin: "0 0 0px 50px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          POPULAR WATCHES
        </Typography>
        <Stack direction="row" sx={{ flexWrap: "wrap", margin: "20px 0 0 0" }}>
          {getPopularProducts()}
        </Stack>
      </Box>
    </>
  );
};

export default HomeCategory;
