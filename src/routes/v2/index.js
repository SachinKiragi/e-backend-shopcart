const express = require('express');
const pingController = require('./pingRouter');
const productRouter = require('./productRouter');
const { productController } = require('../../controllers/v2/productController');
const v2Router = express.Router();

v2Router.use('/ping', pingController);
v2Router.use('/product', productController);

module.exports = v2Router;