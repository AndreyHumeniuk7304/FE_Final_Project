import { useState } from "react";

const FilterMobileHeader = () => {
  const [isClickedOnFilter, setIsClickedOnFilter] = useState(false);

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
