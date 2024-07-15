import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CompanySymbol, SymbolState } from "../types";

const initialState: SymbolState = {
    symbol: "GOOGL"
}

export const SymbolSlice = createSlice({
    name: "symbol",
    initialState,
    reducers: {
        onChnage: (state, action: PayloadAction<CompanySymbol>) => {
            state.symbol = action.payload
        }
    }
})

export const { onChnage } = SymbolSlice.actions
export default SymbolSlice.reducer;
