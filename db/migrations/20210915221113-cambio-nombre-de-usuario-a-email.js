'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn('usuario', 'nombreUsuario', 'email'),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn('usuario', 'email', 'nombreUsuario'),
    ]);
  },
};
