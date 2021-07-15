'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('registro', 'departamento', {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('registro', 'departamento', {
        type: Sequelize.DataTypes.INTEGER,
      }),
    ]);
  },
};
