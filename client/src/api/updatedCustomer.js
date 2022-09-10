import axios from "../ulits/instance/instance";

const updatedCustomer = (newCustomer) => axios.put("/customers", newCustomer);

export default updatedCustomer;
