'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipients', {
      id: {
        type: Sequelize.INTEGER,
        alowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      number: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      complement: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      postalcode: {
        type: Sequelize.INTEGER,
        alowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('recipients');
  },
};
