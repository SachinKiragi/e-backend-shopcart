const express = require('express');
const app = express();
const { PORT } = require('./config/serverConfig');
const apiRouter = require('./routes/apiRouter');


app.use('/api', apiRouter);

app.listen(PORT, ()=>{
    console.log("Server for shopcart is Up ", PORT);
});