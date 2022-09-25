import { filterTitles } from "./data";

export const getFilterItem = (caregory, productList) => {
  let newList = productList.map(
    (listItem) => listItem[caregory] && listItem[caregory].trim()
  );
  newList = [...new Set(newList)];
  return newList;
};

export const getMinMaxPrice = (productList) => [
  Math.min(...productList.map((item) => item.currentPrice)),
  Math.max(...productList.map((item) => item.currentPrice)),
];

export const setFilterLink = (values, currentPrice) => {
  let link = "?";
  for (let key in values) {
    let value = "";
    Array.isArray(values[key])
      ? (value = values[key].join().toLowerCase())
      : (value = values[key]);
    key === "currentPrice"
      ? (link =
          link +
          "minPrice" +
          "=" +
          currentPrice[0] +
          "&" +
          "maxPrice" +
          "=" +
          currentPrice[1] +
          "&")
      : value !== ""
      ? (link = link + key + "=" + value + "&")
      : null;
  }
  return link;
};

export const getCategories = (search) => {
  const urlArr = search
    .toString()
    .replace(/[^a-zA-Z ]/g, ",")
    .split(",");

  return urlArr.indexOf("categories") !== -1
    ? urlArr[urlArr.indexOf("categories") + 1]
    : [];
};

export const getItemInFilter = (search, setArrOfCheckedItem, categories) => {
  let arr = [];
  arr = categories ? [categories] : [];
  filterTitles.forEach((title) =>
    categories.length
      ? title.toLowerCase() !== "categories" &&
        (arr = [
          ...arr,
          ...search
            .getAll(title)
            .join()
            .split(",")
            .map((data) => data.toLowerCase()),
        ])
      : (arr = [
          ...arr,
          ...search
            .getAll(title)
            .join()
            .split(",")
            .map((data) => data.toLowerCase()),
        ])
  );
  arr = arr.filter((data) => data);
  arr = [...new Set(arr)];

  setArrOfCheckedItem(arr);
};

export const getDefaulteValues = (categorieProductList, categories) => {
  return {
    categories: categories.length ? categories : [],
    brand: [],
    mechanism: [],
    material: [],
    color: [],
    currentPrice: getMinMaxPrice(categorieProductList),
  };
};
