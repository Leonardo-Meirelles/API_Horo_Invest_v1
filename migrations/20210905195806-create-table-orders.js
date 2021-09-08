'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('orders', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },

      stock_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'stocks',
          key: 'id'
        }
      },

      order_quantity: { //mudar nome para nao gerar confusao com a tabela stock
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      order_price: {
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
