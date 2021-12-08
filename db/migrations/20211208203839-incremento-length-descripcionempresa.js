'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('registro', 'descripcion', {
        type: Sequelize.DataTypes.STRING(4096),
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('registro', 'descripcion', {
        type: Sequelize.DataTypes.STRING,
      }),
    ]);
  },
};
