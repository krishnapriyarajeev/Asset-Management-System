import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const requestBaseApi = createApi({
  reducerPath: "requestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("kvLogin");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});

const requestWithTag = requestBaseApi.enhanceEndpoints({
  addTagTypes: ["REQUEST_LIST"],
});

export { requestBaseApi, requestWithTag };
