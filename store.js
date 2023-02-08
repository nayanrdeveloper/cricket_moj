import { configureStore } from "@reduxjs/toolkit";
import { iccRankingApi } from "./features/iccRankingApi";
import { imageApi } from "./features/imageApi";
import { newsApi } from "./features/newsApi";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [iccRankingApi.reducerPath]: iccRankingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      newsApi.middleware,
      imageApi.middleware,
      iccRankingApi.middleware
    ),
});
