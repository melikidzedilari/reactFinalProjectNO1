import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer, cartReducer } from "./slices";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { productReducer } from "./slices/productSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
