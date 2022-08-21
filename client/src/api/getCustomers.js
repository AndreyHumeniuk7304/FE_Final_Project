import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: "http://localhost:3001/api",
});

export default async function getCustomers(userData) {
  return axios.post("/customers/login", userData);
}
