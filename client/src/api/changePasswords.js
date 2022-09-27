import axios from "../ulits/instance/instance";
const changePasswords = (newPasswords) =>
  axios.put("/customers/password", newPasswords);

export default changePasswords;
