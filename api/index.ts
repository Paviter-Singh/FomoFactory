import app from './src/app.js'
import sanitizedConfig from './src/types/env.js'

app.listen(sanitizedConfig.PORT, ()=>{
    console.log('server running at port', sanitizedConfig.PORT);
})