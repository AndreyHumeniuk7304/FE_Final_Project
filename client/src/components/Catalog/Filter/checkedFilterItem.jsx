import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { filterTitles } from "./Filter";

export const CheckedFilterItem = ({ search }) => {
  const nightMode = useSelector((state) => state.nightMode);
  const getAllActiveFilter = () => {
    let valuesArr = [];

    filterTitles.map(
      (title) =>
        (valuesArr = [...valuesArr, ...search.getAll(title).join().split(",")])
    );
    return valuesArr.filter((a) => a);
  };

  return (
    <div>
      <ul
        className="filter__checked"
        style={{
          color: nightMode ? "#fff" : "#000",
        }}
      >
        {getAllActiveFilter().map((data) => (
          <ol
            className="checked__item"
            style={{ border: nightMode ? "1px solid #fff" : "1px solid #000" }}
            key={Math.random()}
          >
            {data}
          </ol>
        ))}
      </ul>
    </div>
  );
};

CheckedFilterItem.propTypes = {
  search: PropTypes.object,
};
