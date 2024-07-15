export interface ListPriceData {
    id: string;
    s: string;
    p: number;
    t: number;
    v: number;
    c: string[];
}

export type CompanySymbol = 'AAPL' | 'GOOGL' | 'MSFT' | 'AMZN' | 'TSLA';

export interface SymbolState {
    symbol: CompanySymbol
}