const express = require('express');
const router = express.Router();
//const shopControllers = require("../controllers/shopControllers");
const {shop,carrito} = require('../controllers/shopControllers.js');

router.get('/', shop);
//router.get('/item/:id',shopControllers.shopItem);
//router.post('/item/:id/add', shopControllers.shopItemAddPOST)
//router.post('/cart', shopControllers.shopCartPOST);
router.get('/carrito', carrito);

module.exports = router;