import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const assetBaseApi = createApi({
  reducerPath: "assetApi",
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

const assetWithTag = assetBaseApi.enhanceEndpoints({
  addTagTypes: ["ASSET_LIST"],
});

export { assetBaseApi, assetWithTag };
