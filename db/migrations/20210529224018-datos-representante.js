'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dato-Representante', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombreRepresentante: {
        type: Sequelize.STRING,
      },
      apellidoRepresentante: {
        type: Sequelize.STRING,
      },
      rolRepresentante: {
        type: Sequelize.STRING,
      },
      emailRepresentante: {
        type: Sequelize.STRING,
      },
      tipoTelefono1: {
        type: Sequelize.INTEGER,
      },
      telefono1: {
        type: Sequelize.INTEGER,
      },
      tipoTelefono2: {
        type: Sequelize.INTEGER,
      },
      telefono2: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Datos-Representante');
  },
};
