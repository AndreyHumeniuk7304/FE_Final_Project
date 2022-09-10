import axios from "../ulits/instance/instance";

export default async function getCustomers(userData) {
  return axios.post("/customers/login", userData);
}
export async function getCustomerData() {
  return axios.get("/customers/customer");
}
