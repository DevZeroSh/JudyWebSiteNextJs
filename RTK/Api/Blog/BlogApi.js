import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseURL,{BlogEndPoint} from "@/api/GlobalData";

export const BlogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2ODUzZGY5NTY4MjdlY2EwYjE4ZWFkMTciLCJpYXQiOjE3NTA5MjM0NjgsImV4cCI6MTc1ODY5OTQ2OH0.dXu5YFTpvFDeXTeFLJcmLFyONf3H7asAI7ZfJPUtmUU";
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["blog"],
  endpoints: (builder) => ({
    // ✅ Get all blogs
    getAllBlogs: builder.query({
      query: () => `${BlogEndPoint}`,
      providesTags: ["blog"],
    }),

    // ✅ Get one blog by ID
    getOneBlog: builder.query({
      query: (id) => `${BlogEndPoint}/${id}`,
      providesTags: ["blog"],
    }),

    // ✅ Post new blog
    postBlog: builder.mutation({
      query: (formData) => ({
        url: `${BlogEndPoint}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["blog"],
    }),

    // ✅ Update existing blog
    updateBlog: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${BlogEndPoint}/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["blog"],
    }),

    // ✅ Delete a blog
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `${BlogEndPoint}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetOneBlogQuery,
  usePostBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = BlogApi;
