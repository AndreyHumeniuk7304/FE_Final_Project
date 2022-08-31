import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const CheckedFilterItem = ({ isItemChecked }) => {
  const nightMode = useSelector((state) => state.nightMode);
  return (
    <div>
      <ul
        className="filter__checked"
        style={{
          color: nightMode ? "#fff" : "#000",
        }}
      >
        {isItemChecked.map((data) => (
          <ol
            className="checked__item"
            key={Math.random()}
            style={{ border: nightMode ? "1px solid #fff" : "1px solid #000" }}
          >
            {data}
          </ol>
        ))}
      </ul>
    </div>
  );
};

CheckedFilterItem.propTypes = {
  isItemChecked: PropTypes.array,
};
