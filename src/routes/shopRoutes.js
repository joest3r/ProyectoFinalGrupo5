/* ROUTER PARA SHOP */

const express = require('express');
const router = express.Router();
const { shop, carrito, item } = require('../controllers/shopControllers.js');

router.get('/', shop);
router.get('/item/:id', item);
router.get('/carrito', carrito);
//router.post('/item/:id/add', item)
//router.post('/carrito', carrito);


module.exports = router;