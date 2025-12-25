const express = require('express');
const pingController = require('./ping_router');
const productRouter = require('./product_router');
const { productController } = require('../../controllers/v2/product_controller');
const v2Router = express.Router();

v2Router.use('/ping', pingController);
v2Router.use('/product', productController);

module.exports = v2Router;