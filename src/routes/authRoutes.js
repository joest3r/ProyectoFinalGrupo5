const express = require('express');
const router = express.Router();
const {login,register} = require("../controllers/authControllers");

router.get('/login', login);
//router.post('/login', authControllers.loginPOST);

router.get('/register', register);
//router.post('/register', authControllers.registerPOST);


module.exports = router;