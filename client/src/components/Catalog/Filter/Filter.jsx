import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import CheckboxForm from "./CheckboxForm";
import { brandsList, mechanismList, materialList, colorList } from "./data";
import { MaterialSlider } from "./MaterialSlider";
import { useSelector } from "react-redux";
import { getFilteredProducts } from "../../../api/getFilteredProducts";
import { useState } from "react";

const Filter = () => {
  const [isClickedOnFilter, setIsClickedOnFilter] = useState(false);
  const productList = useSelector((state) => state.catalog.productList);

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

  const MinMaxPrice = [
    getMinOrMaxPrice(productList, ">").currentPrice,
    getMinOrMaxPrice(productList, "<").currentPrice,
  ];

  const setFilterLink = (values, actions) => {
    let link = "filter?";
    for (let key in values) {
      values[key].length && (link = link + key + "=" + values[key] + "&");
    }
    console.log(link);
  };

  return (
    <>
      {productList.length && (
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
              Categories: [], /// add in the future when main page will be ready
              brand: [],
              mechanism: [],
              material: [],
              color: [],
              price: MinMaxPrice,
            }}
            onSubmit={setFilterLink}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form
                onSubmit={values.handleSubmit}
                className="filter__form"
                id="filter"
              >
                <CheckboxForm title={"brands"} arr={brandsList} />
                <CheckboxForm title={"mechanism"} arr={mechanismList} />
                <CheckboxForm title={"material"} arr={materialList} />
                <CheckboxForm title={"color"} arr={colorList} />
                <MaterialSlider
                  title={"Price"}
                  onChange={handleChange}
                  name="price"
                  min={MinMaxPrice[0]}
                  max={MinMaxPrice[1]}
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
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};
export default Filter;
