import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("desktop")]: {
    padding: "10px 20px",
    fontSize: "12px",
  },
}));

const HomeCategories = () => {
  return (
    <>
      <Box className="categories">
        <Stack direction="row" spacing={2} justifyContent="center">
          <Root className="categories__btn" variant="text">
            <Link to="/man">
              <Typography
                variant="p"
                sx={{
                  color: "primary.light",
                  fontFamily: "fontFamily",
                  fontWeight: "bold",
                }}
              >
                MAN
              </Typography>
            </Link>
          </Root>
          <Root className="categories__btn" variant="text">
            <Link to="/woman">
              <Typography
                variant="p"
                sx={{
                  color: "primary.light",
                  fontFamily: "fontFamily",
                  fontWeight: "bold",
                }}
              >
                LADIES
              </Typography>
            </Link>
          </Root>
          <Root className="categories__btn" variant="text">
            <Link to="/accessory">
              <Typography
                variant="p"
                sx={{
                  color: "primary.light",
                  fontFamily: "fontFamily",
                  fontWeight: "bold",
                }}
              >
                ACCESSORIES
              </Typography>
            </Link>
          </Root>
        </Stack>
      </Box>
    </>
  );
};

export default HomeCategories;
