import axios from "../ulits/instance/instance";

export default async function getFilterProducts(filterCategory, config) {
  try {
    const { data } = await axios.post(`${filterCategory}`, config);
    return data;
  } catch (err) {
    return err;
  }
}
