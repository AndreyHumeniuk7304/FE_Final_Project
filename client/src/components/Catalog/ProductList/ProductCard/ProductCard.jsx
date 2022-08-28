import PropTypes from "prop-types";
import { Box } from "@mui/system";

const ProductCard = ({ image, name, price, viewIsOne }) => {
  return (
    <div className="card-wrapper">
      <img className="card-wrapper__image" src={image} alt={name}></img>
      <Box
        component="h2"
        className={!viewIsOne ? "card-wrapper__name-one" : "card-wrapper__name"}
      >
        {name}
      </Box>
      <Box
        component="h2"
        className={
          !viewIsOne ? "card-wrapper__price-one" : "card-wrapper__price"
        }
      >
        {price} $
      </Box>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  viewIsOne: PropTypes.bool,
};
export default ProductCard;
