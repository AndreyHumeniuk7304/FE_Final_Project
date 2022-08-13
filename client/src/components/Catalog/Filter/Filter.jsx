import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import CheckboxForm from "./CheckboxForm";
import { brandsList, mechanismList, materialList } from "./data";
import { MaterialSlider } from "./MaterialSlider";

const Filter = () => {
  return (
    <div className="filter-wrapper filter">
      <Formik
        initialValues={{
          categories: [], /// add in the future when main page will be ready
          brands: [],
          mechanism: [],
          material: [],
          price: [0, 100],
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
        validator={() => ({})}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={values.handleSubmit}>
            <CheckboxForm title={"brands"} arr={brandsList} />
            <CheckboxForm title={"mechanism"} arr={mechanismList} />
            <CheckboxForm title={"material"} arr={materialList} />
            <MaterialSlider
              title={"Price"}
              onChange={handleChange}
              name="price"
              min={0}
              max={100}
            />
            <Button
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
  );
};
export default Filter;
