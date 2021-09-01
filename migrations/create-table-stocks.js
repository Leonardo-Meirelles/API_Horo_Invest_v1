'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('stocks', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      stockName: {
        allowNull: false,
        type: Sequelize.TEXT
      }

    })
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('stocks')

  }
};
