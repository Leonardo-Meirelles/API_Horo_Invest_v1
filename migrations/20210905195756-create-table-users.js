'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('users', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      user_name: {
        allowNull: false,
        type: Sequelize.TEXT
      },

      user_email: {
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

    return queryInterface.dropTable('users')
  }
};
