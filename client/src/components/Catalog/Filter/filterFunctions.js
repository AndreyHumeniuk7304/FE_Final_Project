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
