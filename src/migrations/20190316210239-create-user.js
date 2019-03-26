"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      document: {
        type: Sequelize.STRING
      },

      email: {
        type: Sequelize.STRING
      },

      password: {
        type: Sequelize.STRING
      },

      firstName: {
        type: Sequelize.STRING
      },

      lastName: {
        type: Sequelize.STRING
      },

      numberMobile: {
        type: Sequelize.STRING
      },

      birthDate:{
        type: Sequelize.STRING
      },

      roleId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'roles', // 'users' refers to table name
          key: 'id', // 'id' refers to column name in roles table
        }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
