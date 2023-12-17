/* ROUTER PARA MAIN */

const express = require('express');
const router = express.Router();
const { index,contacto } = require('../controllers/mainControllers.js');


router.get("/", index)
router.get("/contacto",contacto)
module.exports = router;