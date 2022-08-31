import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { filterTitles } from "./Filter";

export const CheckedFilterItem = ({ search }) => {
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
      <ul className="filter__checked">
        {getAllActiveFilter().map((data) => (
          <ol className="checked__item" key={Math.random()}>
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
