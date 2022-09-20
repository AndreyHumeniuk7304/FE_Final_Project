import * as yup from "yup";

const brand = [
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

const categories = ["mens", "ladies", "accessories"];
const mechanism = ["quartz", "mechanics"];

const color = [
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

const material = ["polymer", "rubber", "steel", "leather", "nylon"];

export const productInputNames = [
  {
    inputName: "brand",
    formName: brand,
    formType: "droplist",
    label: "Brand",
  },
  {
    inputName: "categories",
    formName: categories,
    formType: "droplist",
    label: "Categories",
  },
  {
    inputName: "mechanism",
    formName: mechanism,
    formType: "droplist",
    label: "Mechanism",
  },
  {
    inputName: "color",
    formName: color,
    formType: "droplist",
    label: "Color",
  },

  {
    inputName: "material",
    formName: material,
    formType: "droplist",
    label: "Material",
  },
  {
    inputName: "enabled",
    formName: ["true", "false"],
    formType: "droplist",
    label: "Is available?",
  },

  { inputName: "imageUrls", formType: "multiInput", label: "Image url" },
  { inputName: "quantity", formType: "number", label: "Quantity, pc" },
  { inputName: "name", formType: "text", label: "Full descriptions" },
  { inputName: "currentPrice", formType: "number", label: "Current price" },
  { inputName: "previousPrice", formType: "number", label: "Previous price" },
  {
    inputName: "isNewProduct",
    formType: "droplist",
    formName: ["true", "false"],
    label: "Product is new or not",
  },
  {
    inputName: "isPopularProduct",
    formType: "droplist",
    formName: ["true", "false"],
    label: "Product is popular or not",
  },
];

export const productSchema = yup.object({
  brand: yup.string().required("Brand is required."),
  categories: yup.string().required("Categories is required."),
  mechanism: yup.string().required("Mechanism is required."),
  color: yup.string().required("Color is required."),
  material: yup.string().required("Material is required."),
  enabled: yup.string().required("Enabled is required."),
  imageUrls: yup.array().of(yup.string().url()),
  quantity: yup.number().required("Quantity is required."),
  name: yup.string().min(20, "Name is full description of product, min 20."),
  currentPrice: yup.number().required("CurrentPrice is required."),
  isNewProduct: yup.bool().required("isNewProduct is required"),
  isPopularProduct: yup.bool().required("isPopularProduct is required"),
});

export const productFormDefaultValues = {
  brand: "",
  categories: "",
  mechanism: "",
  color: "",
  material: "",
  enabled: true,
  imageUrls: [""],
  quantity: 1,
  name: "",
  currentPrice: "",
  previousPrice: "",
  isNewProduct: true,
  isPopularProduct: false,
};
