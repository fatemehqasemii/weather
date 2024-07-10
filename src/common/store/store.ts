import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import weatherApi from "../../services/weatherApi";
import ipApi from "../../services/ipApi";

const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [ipApi.reducerPath]: ipApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware, ipApi.middleware),
});

setupListeners(store.dispatch);

export default store;
