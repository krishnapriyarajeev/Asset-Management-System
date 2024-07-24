import { countWithTag } from "../../../api/countApi";

export const CountApi = countWithTag.injectEndpoints({
  endpoints: (builder) => ({
    
    getAllCount: builder.query({
      query: () => ({
        url: "/asset/count",
        method: "GET",
      }), 
      providesTags: ["COUNT_LIST"],
    }),
  }),
});

export const {
  useGetAllCountQuery,
} = CountApi;
