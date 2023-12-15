/*const express = require('express');
const router = express.Router();
//const shopControllers = require("../controllers/shopControllers");
const {shop,carrito} = require('../controllers/shopControllers.js');

router.get('/', shop);
//router.get('/item/:id',item);
router.get('/carrito', carrito);
//router.post('/item/:id/add', item)
//router.post('/carrito', carrito);


module.exports = router;*/



const express = require ("express")
const router = express.Router()

const {index} = require ("../controllers/shopControllers.js")

router.get("/",index)


module.exports = router  
