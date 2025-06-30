import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseURL,{CompaniesEndPoint} from "@/api/GlobalData"; 

export const CompanyApi = createApi({
  reducerPath: "CompanyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2ODUzZGY5NTY4MjdlY2EwYjE4ZWFkMTciLCJpYXQiOjE3NTA5MjM0NjgsImV4cCI6MTc1ODY5OTQ2OH0.dXu5YFTpvFDeXTeFLJcmLFyONf3H7asAI7ZfJPUtmUU";
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Company"],
  endpoints: (builder) => ({
    getAllCompanies: builder.query({
      query: () => `${CompaniesEndPoint}`,
      providesTags: ["Company"],
    }),

    getOneCompany: builder.query({
      query: (id) => `${CompaniesEndPoint}/${id}`,
      providesTags: ["Company"],
    }),

    postCompany: builder.mutation({
      query: (formData) => ({
        url: CompaniesEndPoint,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Company"],
    }),

    updateCompany: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${CompaniesEndPoint}/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Company"],
    }),

    deleteCompany: builder.mutation({
      query: (deleteId) => ({
        url: `${CompaniesEndPoint}/${deleteId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Company"],
    }),
  }),
});

export const {
  useGetAllCompaniesQuery,
  useGetOneCompanyQuery,
  usePostCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = CompanyApi;
