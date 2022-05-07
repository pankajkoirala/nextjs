import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import logger from "redux-logger";
import { loadState } from "./saveInLocal";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: loadState(),
});

export default store;
