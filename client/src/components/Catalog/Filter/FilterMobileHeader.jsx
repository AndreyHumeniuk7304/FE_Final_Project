import { useState } from "react";
import { useSelector } from "react-redux";

const FilterMobileHeader = () => {
  const [isClickedOnFilter, setIsClickedOnFilter] = useState(false);
  const nightMode = useSelector((state) => state.nightMode);

  return (
    <div className="filter__mob-title">
      <p
        onClick={(e) => {
          setIsClickedOnFilter(true);
          document
            .getElementById("filter")
            .classList.add("filter__form--active");
        }}
      >
        Filter
      </p>
      {isClickedOnFilter && (
        <button
          style={{ color: nightMode ? "white" : "black" }}
          onClick={() => {
            setIsClickedOnFilter(false);
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
