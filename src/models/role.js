'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    name: DataTypes.STRING
  }, {});
  role.associate = function(models) {
    role.hasMany(models.User)
  };
  return role;
};