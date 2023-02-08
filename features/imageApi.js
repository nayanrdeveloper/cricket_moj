import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {X_RAPIDAPI_KEY, X_RAPIDAPI_HOST, BASE_URL} from '@env';

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      "X-RapidAPI-Key": X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": X_RAPIDAPI_HOST,
    },
  }),
  endpoints: (builder) => ({
    getImageById: builder.query({
        query: (imageId) => {
            return `/img/v1/i1/${imageId}/`
        },
      }),
  })
});

export const { useGetImageByIdQuery } = imageApi;

