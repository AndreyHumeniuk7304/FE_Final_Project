import axios from "../ulits/instance/instance";

export const getSliders = async () => {
  const { data } = await axios.get("/slides");
  return data;
};
