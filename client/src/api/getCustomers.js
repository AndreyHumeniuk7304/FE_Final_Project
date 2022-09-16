import axios from "../ulits/instance/instance";

export async function getCustomers(userData) {
  return axios.post("/customers/login", userData);
}
export const getCustomerData = async () => {
  const { data } = await axios.get("/customers/customer");
  return data;
};
