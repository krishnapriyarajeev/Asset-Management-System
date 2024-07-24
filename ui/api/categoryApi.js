import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryBaseApi = createApi({
  reducerPath: "categoryApi",
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

const categoryWithTag = categoryBaseApi.enhanceEndpoints({
  addTagTypes: ["CATEGORY_LIST"],
});

export { categoryBaseApi, categoryWithTag };
