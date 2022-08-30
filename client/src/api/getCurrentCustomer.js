import axios from "../ulits/instance/instance";

export default async function getCurrentCustomer(token) {
  try {
    const { data } = await axios.get("/customers/customer", {
      headers: {
        Authorization: `${token}`,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
}
