const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const verify = require ("../services/verify");


router.post('/login', (req, res)=> {
  let user = req.body;
  const token = jwt.sign({user}, 'SECRET_TOKEN');
      
  res.status(200).send({
    user: req.body,
    token: token
  });
})

// Protected Routes
router.post('/api/protected', verify.ensureToken, (req, res) => {  
    jwt.verify(req.token, 'SECRET_TOKEN', (err, data) =>{
      if (err) {
        res.status(403).send({
          message: 'Usuario no autorizado'
        })
      } else {  
        res.status(200).json({
          status: 'loggedin',
          user: req.body,
          userDecoded: jwt.decode(req.token)
        })
        // res.redirect(200, 'http://localhost:8080/#/about')
        
      }
    } )
  
  });






module.exports = router