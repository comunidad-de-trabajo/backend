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
<<<<<<< HEAD
      /*otros datos*/
      estado: {
        type: Sequelize.STRING,
      },
=======
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
      /*Dato-Empresa*/
      nombreComercial: {
        type: Sequelize.STRING,
      },
<<<<<<< HEAD
      provinciaActual: {
=======
      provincia: {
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
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
<<<<<<< HEAD
        type: Sequelize.INTEGER,
=======
        type: Sequelize.STRING,
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
      },
      razonSocial: {
        type: Sequelize.STRING,
      },
      cuit: {
<<<<<<< HEAD
        type: Sequelize.INTEGER(12),
=======
        type: Sequelize.INTEGER,
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
      },
      tipoEmpleador: {
        type: Sequelize.STRING,
      },
      telefono: {
<<<<<<< HEAD
        type: Sequelize.INTEGER(12),
      },
      /*Tipo-Empresa*/
      areaDeInteres: {
=======
        type: Sequelize.INTEGER,
      },
      /*Tipo-Empresa*/
      areaInteres: {
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
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
<<<<<<< HEAD
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
=======
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
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
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
