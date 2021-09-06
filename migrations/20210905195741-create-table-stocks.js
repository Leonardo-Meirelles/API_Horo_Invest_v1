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

      stock_name: {
        allowNull: false,
        type: Sequelize.TEXT
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('stocks')
  }
};
