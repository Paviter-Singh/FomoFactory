import { configureStore } from "@reduxjs/toolkit";
import symbolReducer from "./SymbolSlice";
import { tradeApi } from "./services/TradeApi";

export const store = configureStore({
    reducer: { 
       symbol:  symbolReducer,
       [tradeApi.reducerPath]: tradeApi.reducer, 
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(tradeApi.middleware)
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;