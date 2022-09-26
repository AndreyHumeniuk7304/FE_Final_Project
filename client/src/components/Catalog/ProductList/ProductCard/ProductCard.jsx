import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ image, name, price, viewIsOne }) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          height="auto"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            sx={{ fontSize: viewIsOne ? "1.6vw" : "3vw" }}
          >
            {name}
          </Typography>
          <Typography
            variant="h5"
            color="black"
            sx={{
              fontSize: {
                desktop: viewIsOne ? "2vw" : "3vw",
                mobile: viewIsOne ? "1.8vw" : "2.8vw",
              },
              marginTop: !viewIsOne && "7%",
            }}
          >
            {price} $
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  viewIsOne: PropTypes.bool,
};
export default ProductCard;
