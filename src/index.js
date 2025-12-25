const express = require('express');
const app = express();
const { PORT } = require('./config/server_config');
const apiRouter = require('./routes/api_router');


app.use('/api', apiRouter);

app.listen(PORT, ()=>{
    console.log("Server for shopcart is Up ", PORT);
});