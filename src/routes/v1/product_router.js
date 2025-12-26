const express = require('express');
const productRouter = express.Router();

const { createProduct, getProducts, getProduct } = require('../../controllers/v1/product_controller');
const createProductValidator = require('../../middlewares/product_middleware');


productRouter.post('/', createProductValidator, createProduct);
productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);

module.exports = productRouter;