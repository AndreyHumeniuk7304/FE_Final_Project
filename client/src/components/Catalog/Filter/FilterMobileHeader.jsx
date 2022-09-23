import PropTypes from "prop-types";
import { IconButton, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const FilterMobileHeader = ({
  isMobileFilterBtnShow,
  setIsMobileFilterBtnShow,
}) => {
  const toggleFilterInMobilte = (e, bool, display) => {
    setIsMobileFilterBtnShow(bool);

    document.getElementById("filter").style.display = display;
  };

  return (
    <Stack
      direction="row"
      display={{ mobile: "flex", desktop: "none" }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Typography onClick={(e) => toggleFilterInMobilte(e, true, "block")}>
        Filter
      </Typography>
      {isMobileFilterBtnShow && (
        <IconButton onClick={(e) => toggleFilterInMobilte(e, false, "none")}>
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
