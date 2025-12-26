const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const app = express();
const { PORT } = require('./config/server_config');
const apiRouter = require('./routes/api_router');

app.use(responseTime(function(req, res, time){
    console.log("time: ", time);
}));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRouter);

app.listen(PORT, ()=>{
    console.log("Server for shopcart is Up ", PORT);
});