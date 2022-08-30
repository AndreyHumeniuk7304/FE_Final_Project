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
