import { requestWithTag } from "../../../api/requestApi";

export const requestApi = requestWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getRequestList: builder.query({
            query: () => '/request',
            providesTags:['REQUEST_LIST']
        }),
        getRequestDetails: builder.query({
            query: (id) => `/request/${id}`
        }),
        addRequest: builder.mutation({
            query: (body) => ({
                url: '/request',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['REQUEST_LIST']

        }),
        updateRequest: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/request/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['REQUEST_LIST']

        }),
        deleteRequest: builder.mutation({
            query: (id) => ({
                url: `/request/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['REQUEST_LIST']
        }),
    }),
});

export const { 
    useLazyGetRequestListQuery,
    useGetRequestListQuery,
    useAddRequestMutation,
    useGetRequestDetailsQuery,
    useUpdateRequestMutation,
    useDeleteRequestMutation 
} = requestApi;
