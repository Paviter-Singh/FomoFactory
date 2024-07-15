import WebSocket from 'ws'
import sanitizedConfig from '../types/env';
import { LastPriceResponse } from '../types';
import { createListPriceData } from '../controller/trade';
const url = 'wss://ws.finnhub.io?token='+sanitizedConfig.API_KEY
const socket = new WebSocket(url);

// ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA']
socket.addEventListener('open', function (event) {
    // return;
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'GOOGL'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'MSFT'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AMZN'}))
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'TSLA'}))
});

// Listen for messages
socket.on('message', function (event) {

    const respose: LastPriceResponse = JSON.parse(event.toString())
    if(respose.type=='trade'){
        respose.data.forEach(data=>{
            createListPriceData(data)
        })
    }
    else if(respose.type!='ping'){
        console.log(respose.type)
    }
});

socket.on('error',(error)=>{
    console.log('error', error);
})
// Unsubscribe
var unsubscribe = function(symbol: string) {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
}