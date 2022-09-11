import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import catalogReducer from "./catalog/reducer";
import cartReducer from "./cart/reducer";
import userAccountReducer from "./userAccount/reducer";
import nightModeReducer from "./switchTheme/reducer";
import wishlistReducer from "./wishlist/reducer";
import paymentMethodReducer from "./paymentMethod/reducer";
import shippingMethodReducer from "./shippingMethod/reducer";

/* code review: good
  використання combineReducers для об'єднання редюсерів
 */

/* code review: good, but could be better
  можна було б взяти redux-toolkit для організації стору
  https://redux-toolkit.js.org/
 */

export const reducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  userAccount: userAccountReducer,
  nightMode: nightModeReducer,
  wishlist: wishlistReducer,
  paymentMethod: paymentMethodReducer,
  shippingMethod: shippingMethodReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(reducer, compose(applyMiddleware(thunk), devTools));

export default store;
