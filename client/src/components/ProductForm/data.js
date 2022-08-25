import * as yup from "yup";

const brand = [
  "brand",
  "morellato",
  "hirsch",
  "certina",
  "casio",
  "oris",
  "fossil",
  "nixon",
  "gucci",
  "frederique",
];

const Categories = ["Categories", "Mens", "Ladies", "Accessories"];
const mechanism = ["mechanism", "quartz", "mechanics"];

const color = [
  "color",
  "silver",
  "blue",
  "grey",
  "grey",
  "black",
  "green",
  "brown",
  "white",
  "red",
  "gold",
];

const material = ["material", "polymer", "rubber", "steel", "leather", "nylon"];

export const productInputNames = [
  {
    inputName: "brand",
    formName: brand,
    formType: "droplist",
    label: "brand",
  },
  {
    inputName: "Categories",
    formName: Categories,
    formType: "droplist",
    label: "categories",
  },
  {
    inputName: "mechanism",
    formName: mechanism,
    formType: "droplist",
    label: "mechanism",
  },
  {
    inputName: "color",
    formName: color,
    formType: "droplist",
    label: "color",
  },

  {
    inputName: "material",
    formName: material,
    formType: "droplist",
    label: "material",
  },
  {
    inputName: "enabled",
    formName: ["enabled", "true", "false"],
    formType: "droplist",
    label: "is available",
  },

  { inputName: "imageUrls", formType: "inputADD", label: "image url" },
  { inputName: "quantity", formType: "number", label: "quantity, pc" },
  { inputName: "name", formType: "text", label: "full descriptions" },
  { inputName: "currentPrice", formType: "number", label: "current price" },
  { inputName: "previousPrice", formType: "number", label: "previous price" },

  {
    inputName: "date",
    formType: "date",
    label: "current date",
  },
];

export const productSchema = yup.object({
  brand: yup.string().required("Brand is required."),
  Categories: yup.string().required("Categories is required."),
  mechanism: yup.string().required("Mechanism is required."),
  color: yup.string().required("Color is required."),
  material: yup.string().required("Material is required."),
  enabled: yup.string().required("Enabled is required."),
  imageUrls: yup.array().of(yup.string().url()),
  quantity: yup.number().required("Quantity is required."),
  name: yup.string().min(20, "Name is full description of product, min 20."),
  currentPrice: yup.number().required("CurrentPrice is required."),
  date: yup.date().required("CurrentPrice is required."),
});
