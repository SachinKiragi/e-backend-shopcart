const express = require('express');
const app = express();
const { PORT } = require('./config/serverConfig')
const { pingController } = require('./controllers/pingController')

app.get('/api/v1/ping', pingController);

app.listen(PORT, ()=>{
    console.log("Server for shopcart is Up ", PORT);
});