'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('registro', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      /*otros datos*/
      estado: {
        type: Sequelize.STRING,
      },
      /*Dato-Empresa*/
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
      /*Tipo-Empresa*/
      areaInteres: {
        type: Sequelize.STRING,
      },
      sitioWeb: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      tipoEmpresa: {
        type: Sequelize.STRING,
      },
      descripcion: {
        type: Sequelize.STRING,
      },
      /*Dato-Representante*/
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
    await queryInterface.dropTable('registro');
  },
};
