import PropTypes from "prop-types";

export const CheckedFilterItem = ({ curentValues }) => {
  const getArrayOfFilter = () => {
    let valuesArr = [];

    for (let key in curentValues) {
      let value = curentValues[key];

      Array.isArray(value)
        ? key === "currentPrice"
          ? (valuesArr = [...valuesArr, value.join("-")])
          : value.forEach((data) => (valuesArr = [...valuesArr, data]))
        : key.toLowerCase() !== "categories" &&
          (valuesArr = [...valuesArr, value]);
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
};
