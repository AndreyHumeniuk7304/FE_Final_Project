import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import catalogReducer from "./catalog/reducer";
import cartReducer from "./cart/reducer";
import userAccountReducer from "./userAccount/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const reducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  userAccount: userAccountReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk), devTools)
);

export const persistor = persistStore(store);

export default store;
