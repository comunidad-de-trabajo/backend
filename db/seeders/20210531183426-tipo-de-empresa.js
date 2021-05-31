'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tipo-Empresa', [
      {
        areaInteres: 'area interesante',
        sitioWeb: 'holaMundo.com.ar',
        email: 'hola@mundo.com',
        tipoEmpresa: 'unTipo',
        descripcion: 'descripcion larga como muestra "hola mundo"',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        areaInteres: 'area interesante2',
        sitioWeb: 'ejecutaTuMente.com.es',
        email: 'ejecuta@yahoo.com',
        tipoEmpresa: 'unTipo2',
        descripcion: 'descripcion parte 2 larga como muestra',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        areaInteres: 'area interesante3',
        sitioWeb: 'reactCodeJS.edu.com',
        email: 'react@microsoft.com',
        tipoEmpresa: 'unTipo3',
        descripcion:
          'descripcion parte 3 para alargar esto y no sea repetitivo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tipo-Empresa', null, {});
  },
};
