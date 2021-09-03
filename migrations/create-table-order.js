'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('order', {

      orderNumber: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
//checar os types quando puxar do DB
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
        type: Sequelize.DECIMAL
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('order')

  }
}
