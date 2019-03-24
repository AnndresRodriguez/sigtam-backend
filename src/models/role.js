'use strict';

const sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    name: DataTypes.STRING
  }, {});
  role.associate = function(models) {
    role.hasMany(models.User)
  };
  return role;
};