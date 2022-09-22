import { CHOOSE_PEYMENT_METHOD } from "./type";

export const paymentMethodAction = (payload) => ({
  type: CHOOSE_PEYMENT_METHOD,
  payload,
});
