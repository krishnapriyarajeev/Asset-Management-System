import { assetWithTag } from "../../../api/assetApi";

export const AssetApi = assetWithTag.injectEndpoints({
  endpoints: (builder) => ({
    createAsset: builder.mutation({
      query: (payload) => ({
        url: "/asset",
        method: "POST",
        body: payload,
      }),
    }),
    getAllAssets: builder.query({
      query: () => ({
        url: "/asset",
        method: "GET",
      }),
      providesTags: ["ASSET_LIST"],
    }),
    getAssetById: builder.query({
      query: (id) => ({
        url: `/asset/${id}`,
        method: "GET",
      }),
      providesTags: ["ASSET_LIST"],
    }),
    editAsset: builder.mutation({
      query: (payload) => ({
        url: "/asset",
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["ASSET_LIST"],
    }),
    deleteAsset: builder.mutation({
      query: (id) => ({
        url: `/asset/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ASSET_LIST"],
    }),
  }),
});

export const {
  useGetAllAssetsQuery,
  useGetAssetByIdQuery,
  useCreateAssetMutation,
  useEditAssetMutation,
  useDeleteAssetMutation,
} = AssetApi;
