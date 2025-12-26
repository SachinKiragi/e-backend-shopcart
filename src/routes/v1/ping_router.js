const express = require('express');
const { pingController } = require('../../controllers/v1/ping_controller');
const pingRouter = express.Router();

function chekRequest(request, response, next){
    console.log("Checking request");
    next();
    console.log("ending Checking request");
}

function logger(request, response, next){
    console.log("In logger");
    next();
    console.log("ending In logger");
}

function authChecker(request, response, next){
    console.log("In auth Chekcer");
    next();
    console.log("ending In auth Chekcer");
}

pingRouter.get('/', [chekRequest, logger, authChecker], pingController);

module.exports = pingRouter;