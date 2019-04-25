const express = require('express');
const registerService = require('../../services/auth/register');
let router = express.Router();


router.post('/', registerService.registerUser);


module.exports = router;