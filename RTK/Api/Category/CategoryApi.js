import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BaseURL, { BlogCategoriesEndPoint } from "../../../api/GlobalData";

export const BlogApi = createApi({
  reducerPath: "BlogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
  }),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: (keyword = "") =>
        keyword ? `${BlogEndPoint}?keyword=${keyword}` : `${BlogEndPoint}`,
      providesTags: ["Blog"],
    }),

    getBlogsByCategory: builder.query({
      query: (categoryId) => `${BlogEndPoint}?categoryId=${categoryId}`,
      providesTags: ["Blog"],
    }),
  }),
});
export const {} = BlogApi;
