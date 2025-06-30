import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseURL, { ServiceEndPoint } from "@/api/GlobalData";

export const ServiceApi = createApi({
  reducerPath: "service",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2ODUzZGY5NTY4MjdlY2EwYjE4ZWFkMTciLCJpYXQiOjE3NTA5MjM0NjgsImV4cCI6MTc1ODY5OTQ2OH0.dXu5YFTpvFDeXTeFLJcmLFyONf3H7asAI7ZfJPUtmUU";
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["service"],
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => `${ServiceEndPoint}?limit=10000`,
      providesTags: ["service"],
    }),

    getOneService: builder.query({
      query: (id) => `${ServiceEndPoint}/${id}`,
      providesTags: ["service"],
    }),

    postService: builder.mutation({
      query: (formData) => ({
        url: `${ServiceEndPoint}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["service"],
    }),

    updateService: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${ServiceEndPoint}/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["service"],
    }),

    deleteOneService: builder.mutation({
      query: (id) => ({
        url: `${ServiceEndPoint}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetOneServiceQuery,
  usePostServiceMutation,
  useUpdateServiceMutation,
  useDeleteOneServiceMutation,
} = ServiceApi;
