import PropTypes from "prop-types";
import { Box } from "@mui/system";
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
        marginTop: "8%",
        marginBottom: "8%",
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
          <Typography gutterBottom variant="p" component="div">
            {name}
          </Typography>
          <Typography variant="h5" color="black">
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
