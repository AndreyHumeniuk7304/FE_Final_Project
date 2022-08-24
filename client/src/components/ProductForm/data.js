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

const Categories = ["Mens", "Ladies", "Accessories"];
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
    formName: ["true", "false"],
    formType: "droplist",
    label: "is available",
  },

  { inputName: "imageUrls", formType: "input", label: "image url" },
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
