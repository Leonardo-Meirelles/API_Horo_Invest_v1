'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('orders', {

      order_number: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      //checar os types quando puxar do DB
      user_name: {
        allowNull: false,
        type: Sequelize.TEXT,
        references: {
          model: 'users', //nome da tabela
          key: 'user_name' //campo que eu quero pegar
        }
      },

      user_email: { //tirar isso
        allowNull: false,
        type: Sequelize.TEXT
      },

      stock_name: {
        allowNull: false,
        type: Sequelize.TEXT
      },

      stock_quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      stock_value: { //trocar pra price
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
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

    return queryInterface.dropTable('orders')
  }
};
