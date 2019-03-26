'use strict';

const sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    document: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    numberMobile: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.role)
  };
  return User;
};