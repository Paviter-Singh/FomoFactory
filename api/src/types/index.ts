type Type = 'ping' | 'trade'

export enum TradeCondition {
    Regular = 1,
    Acquisition,
    AveragePriceTrade,
    Bunched,
    CashSale,
    Distribution,
    AutomaticExecution,
    IntermarketSweepOrder,
    BunchedSold,
    PriceVariationTrade,
    CapElection,
    OddLotTrade,
    Rule127,
    Rule155,
    SoldLast,
    MarketCenterOfficialClose,
    NextDay,
    MarketCenterOpeningTrade,
    OpeningPrints,
    MarketCenterOfficialOpen,
    PriorReferencePrice,
    Seller,
    SplitTrade,
    FormTTrade,
    ExtendedHours,
    ContingentTrade,
    StockOptionTrade,
    CrossTrade,
    YellowFlag,
    SoldOutOfSequence,
    StoppedStock,
    DerivativelyPriced,
    MarketCenterReopeningTrade,
    ReopeningPrints,
    MarketCenterClosingTrade,
    ClosingPrints,
    QualifiedContingentTrade,
    PlaceholderFor611Exempt,
    CorrectedConsolidatedClose,
    Opened,
    TradeThroughExempt
  }


export interface LastPriceResponse{
    "data": LastPrice[],
    /** @type{ping or trade} */
    "type": Type
}

//some types are used in UI

export type CompanySymbol = 'AAPL' | 'GOOGL' | 'MSFT' | 'AMZN' | 'TSLA';

export interface LastPrice{
    /** Symbol */
   s: CompanySymbol,
   /** Last Price */
   p: number,
   /** TimeStamp */
   t: EpochTimeStamp,
   /** Volumn */
   v: number
   /**  List of trade conditions */
   c: TradeCondition[] | null,
}
