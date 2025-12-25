const express = require('express');
const productRouter = express.Router();

const { productController } = require('../../controllers/v1/productController');

productRouter.use('/', productController);

module.exports = productRouter;