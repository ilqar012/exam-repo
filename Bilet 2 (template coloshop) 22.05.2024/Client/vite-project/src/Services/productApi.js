//redux-toolkit-query - RTK
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    //endpoints
    getAllProducts: builder.query({
      query: () => `products`,
    }),
    getProductByID: builder.query({
      query: (_id) => `products/${_id}`,
    }),
    deleteProductByID: builder.mutation({
      query: (_id) => ({
        url: `products/${_id}`,
        method: "DELETE",
      }),
    }),
    postProduct: builder.mutation({
      query: (payload) => ({
        url: "products",
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

//auto-generate hook (use + endpoint + Query)
export const {
  useGetAllProductsQuery,
  useGetProductByIDQuery,
  useDeleteProductByIDMutation,
  usePostProductMutation,
} = ProductsApi;