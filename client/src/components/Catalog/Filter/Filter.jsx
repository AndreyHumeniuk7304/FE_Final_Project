import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import CheckboxForm from "./CheckboxForm";
import { brandsList, mechanismList, materialList, colorList } from "./data";
import { MaterialSlider } from "./MaterialSlider";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import { fetchCategoriesProducts } from "../../../store/catalog/actions";

const Filter = ({ categories }) => {
  const [isClickedOnFilter, setIsClickedOnFilter] = useState(false);
  const productList = useSelector(
    (state) => state.catalog.categorieProductList
  );

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

  const getMinMaxPrice = () => [
    getMinOrMaxPrice(productList, ">").currentPrice,
    getMinOrMaxPrice(productList, "<").currentPrice,
  ];

  const setFilterLink = (values, actions) => {
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

    dispatch(fetchCategoriesProducts(`products/${link}`));
  };

  return (
    <>
      (
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

        <Formik
          initialValues={{
            Categories: categories,
            brand: [],
            mechanism: [],
            material: [],
            color: [],
            currentPrice: getMinMaxPrice(),
          }}
          onSubmit={setFilterLink}
        >
          {({ values, handleChange, handleSubmit, resetForm }) => (
            <Form
              onSubmit={values.handleSubmit}
              className="filter__form"
              id="filter"
            >
              <CheckboxForm title={"brand"} arr={brandsList} />
              <CheckboxForm title={"mechanism"} arr={mechanismList} />
              <CheckboxForm title={"material"} arr={materialList} />
              <CheckboxForm title={"color"} arr={colorList} values={values} />
              <MaterialSlider
                title={"Price"}
                onChange={handleChange}
                name="currentPrice"
                min={getMinMaxPrice()[0]}
                max={getMinMaxPrice()[1]}
              />
              <Button
                className="filter__btn"
                type="submit"
                sx={{ color: "white" }}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Apply
              </Button>
              <Button className="filter__btn" type="submit" onClick={resetForm}>
                Reset
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      )
    </>
  );
};
export default Filter;

Filter.propTypes = {
  categories: PropTypes.string,
};
