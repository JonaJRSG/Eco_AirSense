import { apiSlice } from "../apiSlice";

export const userApi = apiSlice.injectEndpoints({
	tagTypes: ["User"],
	endpoints: (builder) => ({
		getUser: builder.query({
			query: (userId) => ({
				url: `https://jiltnhsnduzfgmwutatx.supabase.co/rest/v1/Users?select=*`,
				method: "GET",
				headers: {
					apikey:
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppbHRuaHNuZHV6Zmdtd3V0YXR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMjMxNjYsImV4cCI6MjA3Njc5OTE2Nn0.iHJeev7WKLFZG_gC7HLrVoCEwJTkpwAGe-uUGm4-UhQ",
					Authorization: `Bearer ${userId}`,
				},
			}),
		}),
	}),
});

export const { useGetUserQuery } = userApi;
