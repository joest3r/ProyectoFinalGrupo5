/* ROUTER PARA AUTH */

const express = require('express');
const router = express.Router();
const { login, register } = require("../controllers/authControllers");

router.get('/login', login);
router.get('/register', register);
//router.post('/login', authControllers.loginPOST);
//router.post('/register', authControllers.registerPOST);

module.exports = router;