import axios from "../ulits/instance/instance";

const addNewCustomers = (newCustomer) => axios.post("/customers", newCustomer);

export default addNewCustomers;
