import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: "http://localhost:3001/api",
});

export const setAuthToken = (token) => {
  token
    ? (axios.defaults.headers.common["Authorization"] = token)
    : delete axios.defaults.headers.common["Authorization"];
  return axios.defaults.headers.common["Authorization"];
};

export default async function getCustomers(userData) {
  return axios.post("/customers/login", userData);
}
