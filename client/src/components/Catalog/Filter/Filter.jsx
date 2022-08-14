import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import CheckboxForm from "./CheckboxForm";
import { brandsList, mechanismList, materialList, colorList } from "./data";
import { MaterialSlider } from "./MaterialSlider";
import { useSelector } from "react-redux";
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
    console.log(values);
    let link = "filter?";
    for (let key in values) {
      let value = "";
      values[key].length && (value = values[key].join().toLowerCase());
      key === "currentPrice"
        ? ""
        : values[key].length && (link = link + key + "=" + value + "&");
    }

    return link;
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
              brand: [],
              mechanism: [],
              material: [],
              color: [],
              currentPrice: MinMaxPrice,
            }}
            onSubmit={setFilterLink}
          >
            {({ values, handleChange, handleSubmit }) => (
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
