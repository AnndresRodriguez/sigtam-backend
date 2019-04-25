const registerController = require('../../controllers/apis/registro');
const loginController = require('../../controllers/apis/login');
const dashboardController = require('../../controllers/apis/dashboard');
const adminController = require('../../controllers/apis/admin');
const mecanicoController = require('../../controllers/apis/mecanico');


const express = require('express');
let router = express.Router();


router.use('/register', registerController);
router.use('/login', loginController);
router.use('/dashboard', dashboardController);
router.use('/admin', dashboardController);
router.use('/mecanico', dashboardController);



module.exports = router;