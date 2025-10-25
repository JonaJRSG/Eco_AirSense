import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jiltnhsnduzfgmwutatx.supabase.co/auth/v1/",
  }),
  endpoints: (builder) => ({}),
});
