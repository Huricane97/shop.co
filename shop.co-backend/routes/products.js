const express = require('express');
const router = express.Router();

const productController = require('../controller/product.js')


router
.get('/', productController.getProducts)
.get('/:id', productController.singleProduct );

exports.routes = router;