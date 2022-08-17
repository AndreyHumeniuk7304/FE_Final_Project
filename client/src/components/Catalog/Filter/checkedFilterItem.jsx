import PropTypes from "prop-types";

export const CheckedFilterItem = ({ curentValues }) => {
  const getArrayOfFilter = () => {
    let valuesArr = [];
    for (let key in curentValues) {
      Array.isArray(curentValues[key])
        ? key === "currentPrice"
          ? (valuesArr = [...valuesArr, curentValues[key].join("-")])
          : curentValues[key].forEach(
              (data) => (valuesArr = [...valuesArr, data])
            )
        : (valuesArr = [...valuesArr, curentValues[key]]);
    }
    valuesArr = valuesArr.filter((data) => data !== "" && data !== ",");
    return valuesArr;
  };

  return (
    <div>
      <ul className="filter__checked">
        {getArrayOfFilter().map((data) => (
          <ol className="checked__item" key={Math.random()}>
            {data}
          </ol>
        ))}
      </ul>
    </div>
  );
};

CheckedFilterItem.propTypes = {
  curentValues: PropTypes.object,
  defaultValues: PropTypes.array,
};
