'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dato-Representante', [
      {
        nombreRepresentante: 'axel',
        apellidoRepresentante: 'blaze',
        rolRepresentante: 'suRol',
        emailRepresentante: 'emailrepresentante1@gmail.com',
        tipoTelefono1: '01',
        telefono1: '1466',
        tipoTelefono2: '02',
        telefono2: '9349',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombreRepresentante: 'mark',
        apellidoRepresentante: 'evans',
        rolRepresentante: 'suRol2',
        emailRepresentante: 'emailrepresentante2@gmail.com',
        tipoTelefono1: '01',
        telefono1: '3467',
        tipoTelefono2: '02',
        telefono2: '3467',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombreRepresentante: 'shawn',
        apellidoRepresentante: 'froste',
        rolRepresentante: 'suRol3',
        emailRepresentante: 'emailrepresentante3@gmail.com',
        tipoTelefono1: '01',
        telefono1: '0876',
        tipoTelefono2: '02',
        telefono2: '2355',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dato-Representante', null, {});
  },
};
