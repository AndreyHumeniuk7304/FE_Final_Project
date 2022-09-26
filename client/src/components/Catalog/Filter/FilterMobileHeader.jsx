import PropTypes from "prop-types";
import { IconButton, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const FilterMobileHeader = ({
  isMobileFilterBtnShow,
  setIsMobileFilterBtnShow,
}) => {
  return (
    <Stack
      direction="row"
      display={{ mobile: "flex", desktop: "none" }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Typography onClick={() => setIsMobileFilterBtnShow(true)}>
        Filter
      </Typography>
      {isMobileFilterBtnShow && (
        <IconButton onClick={() => setIsMobileFilterBtnShow(false)}>
          <Close />
        </IconButton>
      )}
    </Stack>
  );
};

export default FilterMobileHeader;

FilterMobileHeader.propTypes = {
  isMobileFilterBtnShow: PropTypes.bool,
  setIsMobileFilterBtnShow: PropTypes.func,
};
