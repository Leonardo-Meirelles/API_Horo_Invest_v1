'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('order', {

      order: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      user: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      stock: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      stockValue: {
        allowNull: false,
        type: Sequelize.INTEGER
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('order')

  }
}
