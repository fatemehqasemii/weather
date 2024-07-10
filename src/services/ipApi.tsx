import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ipApi = createApi({
  reducerPath: "ipApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ipapi.co/" }),
  endpoints: (builder) => ({
    getIpInfo: builder.query({
      query: () => `/json/`,
    }),
  }),
});

export const { useGetIpInfoQuery } = ipApi;
export default ipApi;
