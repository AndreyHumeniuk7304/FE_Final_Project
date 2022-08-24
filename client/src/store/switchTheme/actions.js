import { SWITCH_MODE } from "./type.js";

export const switchThemeAction = (payload) => ({
  type: SWITCH_MODE,
  payload,
});
