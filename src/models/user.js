'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    document: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    numberMobile: DataTypes.STRING,
    birthDate: DataTypes.DATE,
  
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.role)
  };
  return User;
};