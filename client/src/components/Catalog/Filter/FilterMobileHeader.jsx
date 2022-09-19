import PropTypes from "prop-types";
import { Button, Stack, Typography } from "@mui/material";

const FilterMobileHeader = ({
  isMobileFilterBtnShow,
  setIsMobileFilterBtnShow,
}) => {
  const toggleFilterInMobilte = (e, bool, display) => {
    setIsMobileFilterBtnShow(bool);
    e.target.parentNode.parentNode.childNodes[1].childNodes[1].style.display =
      display;
  };

  return (
    <Stack direction="row" display={{ mobile: "block", desktop: "none" }}>
      <Typography onClick={(e) => toggleFilterInMobilte(e, true, "block")}>
        Filter
      </Typography>
      {isMobileFilterBtnShow && (
        <Button onClick={(e) => toggleFilterInMobilte(e, false, "none")}>
          X
        </Button>
      )}
    </Stack>
  );
};

export default FilterMobileHeader;

FilterMobileHeader.propTypes = {
  isMobileFilterBtnShow: PropTypes.bool,
  setIsMobileFilterBtnShow: PropTypes.func,
};
