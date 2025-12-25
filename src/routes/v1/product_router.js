const express = require('express');
const productRouter = express.Router();

const { productController } = require('../../controllers/v1/product_controller');

productRouter.use('/', productController);

module.exports = productRouter;