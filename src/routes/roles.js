const express = require('express');
const router = express.Router();
const db = require('../config/database');
const role = require('../models/role');

router.post('/add', (req, res, next) =>{

    let dataAdmin = req.body;
    
    role.create({
        name: dataAdmin.name
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

    res.status(200).json({
        inserted: true
    })

})

module.exports = router