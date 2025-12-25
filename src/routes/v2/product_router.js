const express = require('express');
const { productController } = require('../../controllers/v2/product_controller');
const productRouter = express.Router();

productRouter.use('/product', productController);

module.exports = productRouter;