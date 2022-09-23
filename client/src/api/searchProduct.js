import axios from "../ulits/instance/instance";

export const getFoundProducts = async (searchWord) => {
  const { data } = await axios.post("products/search", {
    query: searchWord.toLowerCase(),
  });
  return data;
};
