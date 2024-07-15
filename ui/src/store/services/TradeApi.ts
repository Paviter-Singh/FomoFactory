import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ListPriceData, CompanySymbol } from '../../types'

export const tradeApi = createApi({
    reducerPath: 'tradeApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getTradeBySymbol: builder.query<ListPriceData[], CompanySymbol>({
            query: (symbol) => `/list-price-data/${symbol}`
        })
    }),
})

export const { useGetTradeBySymbolQuery } = tradeApi