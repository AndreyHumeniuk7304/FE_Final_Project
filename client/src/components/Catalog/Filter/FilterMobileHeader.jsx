import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const FilterMobileHeader = ({
  isMobileFilterBtnShow,
  setIsMobileFilterBtnShow,
}) => {
  const nightMode = useSelector((state) => state.nightMode);

  return (
    <div className="filter__mob-title">
      <p
        onClick={(e) => {
          setIsMobileFilterBtnShow(true);
          document
            .getElementById("filter")
            .classList.add("filter__form--active");
        }}
      >
        Filter
      </p>
      {isMobileFilterBtnShow && (
        <button
          style={{ color: nightMode ? "white" : "black" }}
          onClick={() => {
            setIsMobileFilterBtnShow(false);
            document
              .getElementById("filter")
              .classList.remove("filter__form--active");
          }}
        >
          X
        </button>
      )}
    </div>
  );
};

export default FilterMobileHeader;

FilterMobileHeader.propTypes = {
  isMobileFilterBtnShow: PropTypes.bool,
  setIsMobileFilterBtnShow: PropTypes.func,
};
