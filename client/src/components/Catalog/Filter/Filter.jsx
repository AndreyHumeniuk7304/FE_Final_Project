import { Button } from "@mui/material";
import CheckboxForm from "./CheckboxForm";
import { brandsList, mechanismList, materialList, colorList } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import { fetchCategoriesProducts } from "../../../store/catalog/actions";
import { useForm } from "react-hook-form";
import { MaterialSlider } from "./MaterialSlider";
import { useEffect } from "react";

const Filter = ({ categories }) => {
  const [isClickedOnFilter, setIsClickedOnFilter] = useState(false);
  const [currentPrice, setCurrentPrice] = useState([]);
  const productList = useSelector(
    (state) => state.catalog.categorieProductList
  );

  useEffect(() => {
    setCurrentPrice(getMinMaxPrice());
  }, [productList]);

  const dispatch = useDispatch();

  const getMinOrMaxPrice = (arr, minMax) =>
    arr.length &&
    arr.reduce((prev, curr) =>
      minMax === ">"
        ? prev.currentPrice < curr.currentPrice
          ? prev
          : curr
        : prev.currentPrice > curr.currentPrice
        ? prev
        : curr
    );

  const setFilterLink = (values) => {
    let link = "filter?";
    for (let key in values) {
      let value = "";

      Array.isArray(values[key])
        ? (value = values[key].join().toLowerCase())
        : (value = values[key]);
      key === "currentPrice"
        ? ""
        : values[key].length && (link = link + key + "=" + value + "&");
    }
    console.log(link);
    dispatch(fetchCategoriesProducts(`products/${link}`));
  };

  const getMinMaxPrice = () => [
    getMinOrMaxPrice(productList, ">").currentPrice,
    getMinOrMaxPrice(productList, "<").currentPrice,
  ];

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      Categories: categories,
      brand: [],
      mechanism: [],
      material: [],
      color: [],
      currentPrice: getMinMaxPrice(),
    },
  });

  return (
    <>
      <div className="filter-wrapper filter">
        <div className="filter__mob-title">
          <p
            onClick={() => {
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

        <form
          onSubmit={handleSubmit((data) => {
            setFilterLink(data);
          })}
          className="filter__form"
          id="filter"
        >
          <CheckboxForm title={"brand"} arr={brandsList} register={register} />
          <CheckboxForm
            title={"mechanism"}
            arr={mechanismList}
            register={register}
          />
          <CheckboxForm
            title={"material"}
            arr={materialList}
            register={register}
          />
          <CheckboxForm title={"color"} arr={colorList} register={register} />
          <MaterialSlider
            title={"currentPrice"}
            name="currentPrice"
            defaultValues={getMinMaxPrice()}
            register={register}
            currentPrice={currentPrice}
            setCurrentPrice={setCurrentPrice}
          />
          <Button type="submit" onClick={() => false}>
            Apply
          </Button>
          <Button
            type="button"
            onClick={() => {
              reset();
              setCurrentPrice(getMinMaxPrice());
            }}
          >
            Reset
          </Button>
        </form>
      </div>
    </>
  );
};
export default Filter;

Filter.propTypes = {
  categories: PropTypes.string,
};
