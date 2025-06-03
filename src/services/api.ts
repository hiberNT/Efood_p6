import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Producut = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Producut[]
  delivery: {
    receiver: string
    andress: {
      description: string
      city: string
      zipCode: string
      number: string
      complement: string
    }
  }
  payment: {
    card: {
      name?: string
      number?: string
      code?: string
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

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
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetCardapioQuery,
  useGetRestauranteQuery,
  usePurchaseMutation
} = api

export default api
