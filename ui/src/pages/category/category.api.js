import { categoryWithTag } from "../../../api/categoryApi";

export const CategoryApi = categoryWithTag.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (payload) => ({
        url: "/category",
        method: "POST",
        body: payload,
      }),
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }), 
      providesTags: ["CATEGORY_LIST"],
    }),
    getCategoryById: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
      providesTags: ["CATEGORY_LIST"],
    }),
    editCategory: builder.mutation({
      query: (payload) => ({
        url: "/category",
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["CATEGORY_LIST"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CATEGORY_LIST"],
    }),
  }),
});

export const {
  useGetCategoryByIdQuery,
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = CategoryApi;
