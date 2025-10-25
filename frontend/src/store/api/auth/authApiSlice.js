import { apiSlice } from "../apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "singup",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "token?grant_type=password",
        method: "POST",
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppbHRuaHNuZHV6Zmdtd3V0YXR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMjMxNjYsImV4cCI6MjA3Njc5OTE2Nn0.iHJeev7WKLFZG_gC7HLrVoCEwJTkpwAGe-uUGm4-UhQ",
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
  }),
});
export const { useRegisterUserMutation, useLoginMutation } = authApi;
