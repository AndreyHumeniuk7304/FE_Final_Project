export const filterProductsByCartegory = (productArray, filterWord) => {
  return productArray.filter((product) => product.Categories === filterWord);
};
