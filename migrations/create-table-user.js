'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('user', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userName: {
        allowNull: false,
        type: Sequelize.TEXT
      },

      userEmail: {
        allowNull: false,
        type: Sequelize.TEXT
      }

    })

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('user')
    
  }
};
