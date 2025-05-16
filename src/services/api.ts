import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Infos } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getCardapio: builder.query<Infos, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getRestaurante: builder.query<Infos[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetCardapioQuery, useGetRestauranteQuery } = api

export default api
