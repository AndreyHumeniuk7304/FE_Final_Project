import instance from "../ulits/instance/instance";

export default async function getFilterProducts(filterCategory, config) {
  const { data } = await instance.post(`${filterCategory}`, config);
  return data;
}
