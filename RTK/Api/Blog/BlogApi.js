import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseURL, { BlogEndPoint } from "@/api/GlobalData";

export const BlogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ["blog"],
  endpoints: (builder) => ({
    // ✅ Get all blogs
    getAllBlogs: builder.query({
      query: ({ keyword = "", page = 1, limit = 10 } = {}) => {
        const params = new URLSearchParams();

        if (keyword) params.append("keyword", keyword);
        params.append("page", page.toString());
        params.append("limit", limit.toString());

        return `${BlogEndPoint}?${params.toString()}`;
      },
      providesTags: ["blog"],
    }),

    // ✅ Get one blog by ID
    getOneBlogById: builder.query({
      query: (id) => `${BlogEndPoint}/${id}`,
      providesTags: ["blog"],
    }),
    // ✅ Get one blog by Category Id
    getBlogsByCategory: builder.query({
      query: (slug) => `${BlogEndPoint}/blog_categories/${slug}`,
      providesTags: ["blog"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetOneBlogByIdQuery,
  useGetBlogsByCategoryQuery,
} = BlogApi;
