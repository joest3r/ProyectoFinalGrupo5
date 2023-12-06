const express = require('express');
const router = express.Router();
const shopControllers = require("../controllers/shopControllers");

router.get('/', shopControllers.shop);
router.get('/item/:id',shopControllers.shopItem);
router.post('/item/:id/add', shopControllers.shopItemAddPOST)
router.post('/cart', shopControllers.shopCartPOST);
router.get('/cart', shopControllers.shopCartGET);

module.exports = router;