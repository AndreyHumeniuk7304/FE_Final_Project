import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ image, name, price }) => {
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
            sx={{ fontSize: "1.6vw" }}
          >
            {name}
          </Typography>
          <Typography
            variant="h5"
            color="black"
            sx={{ fontSize: { desktop: "2vw", mobile: "1.8vw" } }}
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
