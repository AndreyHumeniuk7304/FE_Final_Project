import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import catalogReducer from "./catalog/reducer";
import cartReducer from "./cart/reducer";
import userAccountReducer from "./userAccount/reducer";
import nightModeReducer from "./switchTheme/reducer";
import cabinetReducer from "./cabinet/reducer";
import wishlistReducer from "./wishlist/reducer";
import paymentMethodReducer from "./paymentMethod/reducer";
import shippingMethodReducer from "./shippingMethod/reducer";

export const reducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  userAccount: userAccountReducer,
  nightMode: nightModeReducer,
  wishlist: wishlistReducer,
  cabinet: cabinetReducer,
  paymentMethod: paymentMethodReducer,
  shippingMethod: shippingMethodReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(reducer, compose(applyMiddleware(thunk), devTools));

export default store;
