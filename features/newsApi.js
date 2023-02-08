import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { X_RAPIDAPI_KEY, X_RAPIDAPI_HOST, BASE_URL } from "@env";

export const newsApi = createApi({
  reducerPath: "newsCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      "X-RapidAPI-Key": X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": X_RAPIDAPI_HOST,
    },
  }),
  endpoints: (builder) => ({
    getNewsCategories: builder.query({
      query: () => "/news/v1/cat",
    }),
    getNewsStoryCategories: builder.query({
      query: (categoryId) => `/news/v1/cat/${categoryId}`,
    }),
    getNewsTopics: builder.query({
      query: () => "/news/v1/topics",
    }),
    getNewsStoryTopics: builder.query({
      query: (topicId) => `/news/v1/topics/${topicId}`,
    }),
    getNewsDetails: builder.query({
      query: (newsId) => {
        return `/news/v1/detail/${newsId}`;
      },
    }),
    getAllNews: builder.query({
      query: () => `/news/v1/index`,
    }),
  }),
});

export const {
  useGetNewsCategoriesQuery,
  useGetNewsStoryCategoriesQuery,
  useGetNewsTopicsQuery,
  useGetNewsStoryTopicsQuery,
  useGetAllNewsQuery,
  useGetNewsDetailsQuery,
} = newsApi;
