import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const TextWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("desktop")]: {
    padding: "15px 0px 15px",
    fontSize: "12px",
    width: "80%",
  },
}));

const Novelties = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("desktop")]: {
    margin: "50px auto 50px",
  },
}));

const HomeNovelties = () => {
  const categorieProductList = useSelector(
    (state) => state.catalog.categorieProductList
  );

  return (
    <>
      <Novelties className="novelties">
        <Box
          className="novelties__title"
          sx={{ color: "primary.light", fontFamily: "fontFamily" }}
        >
          NEW COLLECTION
        </Box>
        <Box className="novelties__wrapper">
          {categorieProductList !== undefined &&
            categorieProductList.map((product, index, array) => {
              return (
                index < 3 && (
                  <Box
                    key={product._id}
                    className={`novelties__type item-${index + 1}`}
                  >
                    <Link to={product.productUrl}>
                      <img src={product.imageUrls[0]} alt="" />
                      <TextWrapper className="novelties__text-wrapper">
                        <Box
                          className="novelties__text"
                          sx={{
                            color: "primary.light",
                            fontFamily: "fontFamily",
                          }}
                        >
                          {product.name.split(" ").slice(0, 2).join(" ")}
                        </Box>
                      </TextWrapper>
                    </Link>
                  </Box>
                )
              );
            })}
        </Box>
      </Novelties>
    </>
  );
};

export default HomeNovelties;
