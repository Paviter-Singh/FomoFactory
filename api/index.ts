import app from './src/app.js'
import sanitizedConfig from './src/types/env.js'
// import './src/controller/alpha.js'
// import './src/controller/Finn.js'
// import getReactTrade from './src/controller/trade.js'

// console.log(getReactTrade('GOOGL'))
app.listen(sanitizedConfig.PORT, ()=>{
    console.log('server running at port', sanitizedConfig.PORT);
})