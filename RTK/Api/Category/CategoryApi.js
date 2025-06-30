import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BaseURL, { CategoryEndPoint } from "../../../api/GlobalData";

export const BlogApi = createApi({
  reducerPath: "BlogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
    // prepareHeaders: (headers) => {
    //   const jwt = localStorage.getItem("token");
    //   if (jwt) {
    //     headers.set("Authorization", `Bearer ${jwt}`);
    //   }
    //   return headers;
    // },
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

    getBlogsByPage: builder.query({
      query: (page) => `${BlogEndPoint}?page=${page}`,
      providesTags: ["Blog"],
    }),

    getOneBlog: builder.query({
      query: (id) => `${BlogEndPoint}/${id}`,
      providesTags: ["Blog"],
    }),

    createBlog: builder.mutation({
      query: (newBlogData) => ({
        url: `${BlogEndPoint}`,
        method: "POST",
        body: newBlogData,
      }),
      invalidatesTags: ["Blog"],
    }),

    updateBlog: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${BlogEndPoint}/${id}`,
        method: "PUT", 
        body: formData,
      }),
      invalidatesTags: ["Blog"],
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `${BlogEndPoint}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});
export const {
  useGetAllBlogsQuery,
  useGetBlogsByCategoryQuery,
  useGetBlogsByPageQuery,
  useGetOneBlogQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = BlogApi;
