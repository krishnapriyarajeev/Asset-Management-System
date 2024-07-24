import { subCategoryWithTag } from "../../../api/subCategoryApi";

export const SubCategoryApi = subCategoryWithTag.injectEndpoints({
  endpoints: (builder) => ({
    createSubcategory: builder.mutation({
      query: (payload) => ({
        url: "/subcategory",
        method: "POST",
        body: payload,
      }),
    }),
    getAllSubcategories: builder.query({
      query: () => ({
        url: "/subcategory",
        method: "GET",
      }),
      providesTags: ["SUBCATEGORY_LIST"],
    }),
    getSubcategoryById: builder.query({
      query: (id) => ({
        url: `/subcategory/${id}`,
        method: "GET",
      }),
      providesTags: ["SUBCATEGORY_LIST"],
    }),
    editSubcategory: builder.mutation({
      query: (payload) => ({
        url: "/subcategory",
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["SUBCATEGORY_LIST"],
    }),
    deleteSubcategory: builder.mutation({
      query: (id) => ({
        url: `/subcategory/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SUBCATEGORY_LIST"],
    }),
  }),
});

export const {
  useGetSubcategoryByIdQuery,
  useGetAllSubcategoriesQuery,
  useCreateSubcategoryMutation,
  useEditSubcategoryMutation,
  useDeleteSubcategoryMutation,
} = SubCategoryApi;
