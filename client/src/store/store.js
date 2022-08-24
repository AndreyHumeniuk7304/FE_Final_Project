import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import catalogReducer from "./catalog/reducer";
import cartReducer from "./cart/reducer";
import userAccountReducer from "./userAccount/reducer";

export const reducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  userAccount: userAccountReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(reducer, compose(applyMiddleware(thunk), devTools));

export default store;
