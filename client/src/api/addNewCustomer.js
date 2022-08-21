import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: "http://localhost:3001/api",
});

const addNewCustomers = (newCustomer) => axios.post("/customers", newCustomer);
export default addNewCustomers;
