const express = require('express');
const apiRoutes = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const db = require('../../../configs/db');
const User = require('../../models/User');

const httpResponse = {
  onUserNotFound: {
    success: false,
    message: 'Usuario no encontrado.'
  },
  onAuthenticationFail: {
    success: false,
    message: 'La contraseña no coincide.'
  }
}
function loginUser(req, res) { 
    let { email, password } = req.body;
  User.findOne({
      email: email
    }, function(error, user) {
      if (error) throw error;
      if (!user) {
        return res.send(httpResponse.onUserNotFound);
      }
      // Check if password matches
      user.comparePassword(password, function(error, isMatch) {
        if (isMatch && !error) {
          var token = jwt.sign(user.toJSON(), db.secret, {
             expiresIn: 10080
          });
          return res.json({
             success: true, token: token
          });
        }
        res.send(httpResponse.onAuthenticationFail);
      });
    });
  };
  module.exports = {
    loginUser: loginUser
  };