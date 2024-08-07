const express = require('express');
const router = express.Router();
const productController = require('../controller/product.js');

router.get('/', productController.getProducts);
router.get('/:id', productController.singleProduct);

module.exports = { routes: router };
