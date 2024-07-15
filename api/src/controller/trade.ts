import { PrismaClient } from "@prisma/client";
import { CompanySymbol, LastPrice, TradeCondition } from "../types";

const prisma = new PrismaClient;

//This is why I have used the prisma


//create or add data
export async function createListPriceData(listPriceData: LastPrice) {
    const { s, p, t, v, c } = listPriceData;
    const row = await prisma.listPriceData.create({
        data: {
            s,
            p,
            t: BigInt(t), // Convert to BigInt
            v,
            c: c?.map(condition => TradeCondition[condition].toString()), // Convert enum to string
        },
    });
    return row;
}

//fetch the data based on the symbol
export async function getTrade(symbol: CompanySymbol) {
    const data = await prisma.listPriceData.findMany({
        where: { s: symbol },
        orderBy: { t: 'desc' },
        take: 30
    })
    return data;
}
