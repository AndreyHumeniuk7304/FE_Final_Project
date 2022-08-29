import axios from "../ulits/instance/instance";

export default async function getCustomers(userData) {
  return axios.post("/customers/login", userData);
}
