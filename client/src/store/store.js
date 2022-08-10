import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import catalogReducer from "./catalog/reducer";

const initialState = {
  catalog: {
    productList: [],
    isLoading: false,
    hasError: false,
    isFilterOpenMobile: false,
  },
};

export const reducer = combineReducers({
  catalog: catalogReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk), devTools)
);

export default store;
