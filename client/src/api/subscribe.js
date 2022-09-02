import axios from "../ulits/instance/instance";

export async function addNewSubscriber(newSubscriber) {
  try {
    return axios.post("/subscribers", newSubscriber);
  } catch (err) {
    return err;
  }
}

export async function updateSubscriber(updateSubscriber, id) {
  try {
    return axios.put(`/subscribers/${id}`, updateSubscriber);
  } catch (err) {
    return err;
  }
}

export async function updateSubscriberByEmail(updateSubscriber, email) {
  try {
    return axios.put(`/subscribers/email/${email}`, updateSubscriber);
  } catch (err) {
    return err;
  }
}

export async function getAllSubscribers() {
  try {
    return axios.get("/subscribers");
  } catch (err) {
    return err;
  }
}
export async function getSubscriberByEmail(email) {
  try {
    return axios.get(`/subscribers/${email}`);
  } catch (err) {
    return err;
  }
}
