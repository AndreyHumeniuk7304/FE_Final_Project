import { Box } from "@mui/material";
import PropTypes from "prop-types";

export const FooterItem = (props) => (
  <Box
    sx={{
      fontFamily: "fontFamily",
      fontSize: { mobile: "10px", desktop: "18px" },
      marginBottom: { mobile: "10px", desktop: "19px" },
    }}
  >
    {props.children}
  </Box>
);

FooterItem.propTypes = {
  children: PropTypes.object,
};
