const express = require('express');
const User = require('../../models/User');
const httpMessages = {

  onValidationError: {
    success: false,
    message: 'Por favor ingrese el correo y la contraseña'
  },
  onUserSaveError: {
    success: false,
    message: 'Este correo ya está registrado'
  },
  onUserSaveSuccess: {
    success: true,
    message: 'Nuevo Usuario Creado'
  }
}

// Register new users
function registerUser(req, res) {
    let { email, password } = req.body;
    if (!email || !password) {
      res.json(httpMessages.onValidationError);
    } else {
      let newUser = new User({
        email: email,
        password: password
      });
      // Attempt to save the user
      newUser.save(error => {
        if (error) {
          return res.json(httpMessages.onUserSaveError);
        }
        res.json(httpMessages.onUserSaveSuccess);
      });
    }
  }
  module.exports = {
    registerUser: registerUser
  };