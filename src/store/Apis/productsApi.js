import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

let baseUrl = 'https://dummyjson.com/'

let queryBuilder = (url)=>({url})
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({limit =false, skip =false , sortBy =false, order =false})=> queryBuilder(`products?${limit ? `limit=${limit}`: ""}${skip ? `&skip=${skip}`: ""}${sortBy ? `&sortBy=${sortBy}`:""}${order ? `order=${order === 1?"asc":"desc"}`: ""}`)
        }),
        getOneProduct: builder.query({
            query: (id)=> queryBuilder(`products/${id}`)
        }),
        getCategoriesList: builder.query({
            query: ()=> queryBuilder("products/category-list")
        }),
  }),
})


export const { useGetAllProductsQuery ,useGetOneProductQuery , useGetCategoriesListQuery } = productsApi