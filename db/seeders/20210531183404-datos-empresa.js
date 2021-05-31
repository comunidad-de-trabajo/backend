'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dato-Empresa', [
      {
        nombreComercial: 'adidas',
        provincia: 'buenos aires',
        localidad: 'moron',
        direccion: 'unaDireccion',
        piso: '0',
        codigoPostal: '1001',
        departamento: 'test1',
        razonSocial: 'unaRazonSocial1',
        cuit: '1423',
        tipoEmpleador: 'elTipo1',
        telefono: '9474',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombreComercial: 'puma',
        provincia: 'buenos aires',
        localidad: 'hurlingham',
        direccion: 'unaDireccion2',
        piso: '0',
        codigoPostal: '1002',
        departamento: 'test2',
        razonSocial: 'unaRazonSocial2',
        cuit: '1443',
        tipoEmpleador: 'elTipo2',
        telefono: '9674',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombreComercial: 'LG',
        provincia: 'Formosa',
        localidad: 'formosa',
        direccion: 'unaDireccion3',
        piso: '6',
        codigoPostal: '1201',
        departamento: 'test3',
        razonSocial: 'unaRazonSocial3',
        cuit: '6723',
        tipoEmpleador: 'elTipo3',
        telefono: '9682',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dato-Empresa', null, {});
  },
};
