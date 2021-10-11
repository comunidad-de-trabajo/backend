'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'registro', // name of Source model
      'usuarioId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'registro', // name of Source model
      'usuarioId' // key we want to remove
    );
  },
};
