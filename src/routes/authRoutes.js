const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/authControllers");

router.get('/login', authControllers.loginGET);
router.post('/login', authControllers.loginPOST);

router.get('/register', authControllers.registerGET);
router.post('/register', authControllers.registerPOST);


module.exports = router;