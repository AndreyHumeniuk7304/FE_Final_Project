import { useState } from "react";

const FilterMobileHeader = () => {
  const [isClickedOnFilter, setIsClickedOnFilter] = useState(false);
  return (
    <div className="filter__mob-title">
      <p
        onClick={(e) => {
          setIsClickedOnFilter(true);
          document.getElementById("filter").style.display = "block";
        }}
      >
        Filter
      </p>
      {isClickedOnFilter && (
        <button
          onClick={() => {
            setIsClickedOnFilter(false);
            document.getElementById("filter").style.display = "none";
          }}
        >
          X
        </button>
      )}
    </div>
  );
};

export default FilterMobileHeader;
