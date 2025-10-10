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
  tagTypes: ["collection", "latest"],
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
  }),
});

export const {
  useGetAllCollectionsQuery,
  useLazyGetSearchCollectionQuery,
  useGetCollectionQuery,
  usePostCollectionMutation,
  useUpdateCollectionMutation,
  useDeleteCollectionMutation,
  useGetLatestQuery,
  usePostLatestMutation,
  useUpdateLatestMutation,
} = apiSlice;
export default apiSlice;
