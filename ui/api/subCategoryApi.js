import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const subCategoryBaseApi = createApi({
  reducerPath: "subCategoryApi",
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

const subCategoryWithTag = subCategoryBaseApi.enhanceEndpoints({
  addTagTypes: ["SUBCATEGORY_LIST"],
});

export { subCategoryBaseApi, subCategoryWithTag };
