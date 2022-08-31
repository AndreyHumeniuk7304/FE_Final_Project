import PropTypes from "prop-types";

export const CheckedFilterItem = ({ isItemChecked }) => {
  return (
    <div>
      <ul className="filter__checked">
        {isItemChecked.map((data) => (
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
