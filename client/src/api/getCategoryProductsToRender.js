import instance from "../ulits/instance/instance";

export default async function getCategoryProductsToRender(filterCategory) {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  const { data } = await instance.get(`${filterCategory}`, config);
  return data.products;
}
