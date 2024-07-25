import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const countBaseApi = createApi({
  reducerPath: "countApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("kvLogin");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});

const countWithTag = countBaseApi.enhanceEndpoints({
  addTagTypes: ["COUNT_LIST"],
});

export { countBaseApi, countWithTag };
