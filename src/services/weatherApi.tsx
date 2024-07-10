import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.weatherapi.com/v1/" }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: (location) =>
        `forecast.json?key=d55b77ca821943c882b190251240707&q=${location}&days=7`,
    }),
  }),
});

export const { useGetCurrentWeatherQuery } = weatherApi;

export default weatherApi;
