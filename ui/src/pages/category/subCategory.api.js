import { subCategoryWithTag } from "../../../api/subCategoryApi";

export const SubCategoryApi = subCategoryWithTag.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (payload) => ({
        url: "/subcategory",
        method: "POST",
        body: payload,
      }),
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "/subcategory",
        method: "GET",
      }),
      providesTags: ["SUBCATEGORY_LIST"],
    }),
    getCategoryById: builder.query({
      query: (id) => ({
        url: `/subcategory/${id}`,
        method: "GET",
      }),
      providesTags: ["SUBCATEGORY_LIST"],
    }),
    editCategory: builder.mutation({
      query: (payload) => ({
        url: "/subcategory",
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["SUBCATEGORY_LIST"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/subcategory/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SUBCATEGORY_LIST"],
    }),
  }),
});

export const {
  useGetCategoryByIdQuery,
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = SubCategoryApi;
