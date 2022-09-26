import { SWITCH_MODE } from "./type.js";

const nightMode = false;

const nightModeReducer = (state = nightMode, action) => {
  switch (action.type) {
    case SWITCH_MODE:
      return !action.payload;

    default:
      return state;
  }
};

export default nightModeReducer;
