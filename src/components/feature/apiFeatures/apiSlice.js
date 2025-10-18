import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://izubest-luxury-backend-api.onrender.com/api/v1",
    // "http://localhost:3000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["collection", "latest", "admin"],
  endpoints: (builder) => ({
    getAllCollections: builder.query({
      query: ({ page = 1, limit = 15 }) =>
        `/collection?page=${page}&limit=${limit}`,
      providesTags: ["collection"],
    }),
    getSearchCollection: builder.query({
      query: (q) => `/collection/search?q=${q}`,
      providesTags: ["collection"],
    }),
    getCollection: builder.query({
      query: (id) => `/collection/${id}`,
      providesTags: ["collection"],
    }),
    postCollection: builder.mutation({
      query: (collection) => ({
        url: "/collection",
        method: "POST",
        body: collection,
      }),
      invalidatesTags: ["collection"],
    }),
    updateCollection: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/collection/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["collection"],
    }),

    deleteCollection: builder.mutation({
      query: (id) => ({
        url: `/collection/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["collection"],
    }),
    getLatest: builder.query({
      query: () => "/latest",
      providesTags: ["latest"],
    }),
    postLatest: builder.mutation({
      query: (post) => ({
        url: "/latest",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["latest"],
    }),
    updateLatest: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/latest/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["latest"],
    }),
    adminLogin: builder.mutation({
      query: (data) => ({
        url: "/admin/login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["admin"],
    }),
    adminSignup: builder.mutation({
      query: (data) => ({
        url: "/admin/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["admin"],
    }),
    adminUpdate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["admin"],
    }),
    adminDelete: builder.mutation({
      query: (id) => ({
        url: `/admin/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admin"],
    }),
    getMe: builder.query({
      query: () => "/admin/getMe",
      providesTags: ["admin"],
    }),
    AdminLogout: builder.mutation({
      query: () => ({
        url: "/admin/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetAllCollectionsQuery,
  useGetSearchCollectionQuery,
  useLazyGetSearchCollectionQuery,
  useGetCollectionQuery,
  usePostCollectionMutation,
  useUpdateCollectionMutation,
  useDeleteCollectionMutation,
  useGetLatestQuery,
  usePostLatestMutation,
  useUpdateLatestMutation,
  useAdminLoginMutation,
  useAdminSignupMutation,
  useAdminUpdateMutation,
  useAdminDeleteMutation,
  useAdminLogoutMutation,
  useGetMeQuery,
} = apiSlice;
export default apiSlice;
