const express = require('express');
const app = express();
const { PORT } = require('./config/serverConfig')
const pingRoutes = require('./routes/pingRoutes');

app.use('/api/v1/ping', pingRoutes);

app.listen(PORT, ()=>{
    console.log("Server for shopcart is Up ", PORT);
});