'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Oferta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fechaVigencia: {
        type: Sequelize.STRING,
      },
      tituloBusqueda: {
        type: Sequelize.STRING,
      },
      descripcionEmpresa: {
        type: Sequelize.STRING,
      },
      mision: {
        type: Sequelize.STRING,
      },
      responsabilidades: {
        type: Sequelize.STRING,
      },
      secundarioCompleto: {
        type: Sequelize.BOOLEAN,
      },
      paqueteOffice: {
        type: Sequelize.BOOLEAN,
      },
      licenciaConducir: {
        type: Sequelize.BOOLEAN,
      },
      edad: {
        type: Sequelize.BOOLEAN,
      },
      desdeEdad: {
        type: Sequelize.INTEGER,
      },
      hastaEdad: {
        type: Sequelize.INTEGER,
      },
      experienciaPrevia: {
        type: Sequelize.BOOLEAN,
      },
      experienciaPreviaDescription: {
        type: Sequelize.STRING,
      },
      residencia: {
        type: Sequelize.STRING,
      },
      areasEstudio: {
        type: Sequelize.STRING,
      },
      competencias: {
        type: Sequelize.STRING,
      },
      otrosDetalles: {
        type: Sequelize.STRING,
      },
      jornada: {
        type: Sequelize.STRING,
      },
      contrato: {
        type: Sequelize.STRING,
      },
      lugarTrabajo: {
        type: Sequelize.STRING,
      },
      ofrecen: {
        type: Sequelize.STRING,
      },
      nombreCompletoRepresentante: {
        type: Sequelize.STRING,
      },
      emailRepresentante: {
        type: Sequelize.STRING,
      },
      detalles: {
        type: Sequelize.STRING,
      },
      otrasAclaraciones: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Oferta');
  },
};
