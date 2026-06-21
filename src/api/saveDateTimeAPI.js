import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const saveDateTimeAPI = createApi({
  reducerPath: "saveDateTimeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    saveDateTime: builder.mutation({
      query: (dateTime) => ({
        url: "/savedDateTime",
        method: "POST",
        body: {
          datetime: dateTime,
        },
      }),
    }),
  }),
});

export const { useSaveDateTimeMutation } = saveDateTimeAPI;
