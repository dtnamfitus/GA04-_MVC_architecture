const express = require('express');
const router = express.Router();
const productController = require('d:/Web - 22KTPM1/GA04/Controllers/productController');

router.get('/products', productController.listProducts);
router.get('/products/:id', productController.productDetail);

module.exports = router;
