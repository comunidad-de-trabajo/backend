'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dato-Empresa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombreComercial: {
        type: Sequelize.STRING,
      },
      provincia: {
        type: Sequelize.STRING,
      },
      localidad: {
        type: Sequelize.STRING,
      },
      direccion: {
        type: Sequelize.STRING,
      },
      piso: {
        type: Sequelize.INTEGER,
      },
      codigoPostal: {
        type: Sequelize.INTEGER,
      },
      departamento: {
        type: Sequelize.STRING,
      },
      razonSocial: {
        type: Sequelize.STRING,
      },
      cuit: {
        type: Sequelize.INTEGER,
      },
      tipoEmpleador: {
        type: Sequelize.STRING,
      },
      telefono: {
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
    await queryInterface.dropTable('Datos-Empresa');
  },
};
