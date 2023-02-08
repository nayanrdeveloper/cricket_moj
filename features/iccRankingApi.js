import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { X_RAPIDAPI_KEY, X_RAPIDAPI_HOST, BASE_URL } from "@env";

export const iccRankingApi = createApi({
  reducerPath: "iccRankingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      "X-RapidAPI-Key": X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": X_RAPIDAPI_HOST,
    },
  }),
  endpoints: (builder) => ({
    getIccRankingPlayers: builder.query({
      query: (playerType, formatType) =>
        `/stats/v1/rankings/${playerType}?formatType=${formatType}`,
    }),
  }),
});

export const { useGetIccRankingPlayersQuery, usePrefetch } = iccRankingApi;
