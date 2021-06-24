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
      provinciaActual: {
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
        type: Sequelize.INTEGER,
      },
      razonSocial: {
        type: Sequelize.STRING,
      },
      cuit: {
        type: Sequelize.INTEGER(12),
      },
      tipoEmpleador: {
        type: Sequelize.STRING,
      },
      telefono: {
        type: Sequelize.INTEGER(12),
      },
      /*Tipo-Empresa*/
      areaDeInteres: {
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
        type: Sequelize.STRING,
      },
      telefono1: {
        type: Sequelize.INTEGER(12),
      },
      tipoTelefono2: {
        type: Sequelize.STRING,
      },
      telefono2: {
        type: Sequelize.INTEGER(12),
      },
      terminosYCondiciones: {
        type: Sequelize.BOOLEAN,
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
