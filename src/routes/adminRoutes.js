const express = require('express');
const router = express.Router();
const {admin,create} = require('../controllers/adminControllers.js');
router.get('/', admin);
router.get('/create', create);
//router.post('/create', adminControllers.admincreatePOST);
//router.get('/edit/:id', adminControllers.admineditGETID);
//router.put('/edit/:id', adminControllers.admineditPUTID);
//router.delete('/delete/:id', adminControllers.adminDELETEID);

module.exports = router;