import express, { Request } from 'express';
import { getTrade } from './controller/trade';
import { CompanySymbol } from './types';

//command below import to stop the websocket, that fetches the stock data, saves memory
// import './controller/Finn.js'

const app = express();

app.use(express.json());

app.get('/api/list-price-data/:symbol', async (req: Request<{
    symbol: CompanySymbol;
}, any, any, any>, res) => {
    const { symbol }  = req.params;
    console.log('symbol', symbol)
    try {
        const data = await getTrade(symbol)
        

        // Convert BigInt to string
        const serializedData = data.map(item => ({
            ...item,
            t: item.t.toString() 
        }));

        res.json(serializedData);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});
export default app;