'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('registro', [
      {
<<<<<<< HEAD
        estado: 'pendiente',
        nombreComercial: 'adidas',
        provinciaActual: 'buenos aires',
=======
        nombreComercial: 'adidas',
        provincia: 'buenos aires',
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
        localidad: 'moron',
        direccion: 'unaDireccion',
        piso: '0',
        codigoPostal: '1001',
<<<<<<< HEAD
        departamento: '00',
        razonSocial: 'unaRazonSocial1',
        cuit: '142356743',
        tipoEmpleador: 'elTipo1',
        telefono: '9473454',
        areaDeInteres: 'area interesante2',
=======
        departamento: 'test1',
        razonSocial: 'unaRazonSocial1',
        cuit: '1423',
        tipoEmpleador: 'elTipo1',
        telefono: '9474',
        areaInteres: 'area interesante2',
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
        sitioWeb: 'ejecutaTuMente.com.es',
        email: 'ejecuta@yahoo.com',
        tipoEmpresa: 'unTipo2',
        descripcion: 'descripcion parte 2 larga como muestra',
        nombreRepresentante: 'shawn',
        apellidoRepresentante: 'froste',
        rolRepresentante: 'suRol3',
        emailRepresentante: 'emailrepresentante3@gmail.com',
<<<<<<< HEAD
        tipoTelefono1: 'fijo',
        telefono1: '0876345',
        tipoTelefono2: 'fijo',
        telefono2: '2355176',
        terminosYCondiciones: false,
=======
        tipoTelefono1: '01',
        telefono1: '0876',
        tipoTelefono2: '02',
        telefono2: '2355',
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
<<<<<<< HEAD
        estado: 'pendiente',
        nombreComercial: 'puma',
        provinciaActual: 'buenos aires',
=======
        nombreComercial: 'puma',
        provincia: 'buenos aires',
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
        localidad: 'hurlingham',
        direccion: 'unaDireccion2',
        piso: '0',
        codigoPostal: '1002',
<<<<<<< HEAD
        departamento: '00',
        razonSocial: 'unaRazonSocial2',
        cuit: '14435658',
        tipoEmpleador: 'elTipo2',
        telefono: '9674443',
        areaDeInteres: 'area interesante',
=======
        departamento: 'test2',
        razonSocial: 'unaRazonSocial2',
        cuit: '1443',
        tipoEmpleador: 'elTipo2',
        telefono: '9674',
        areaInteres: 'area interesante',
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
        sitioWeb: 'holaMundo.com.ar',
        email: 'hola@mundo.com',
        tipoEmpresa: 'unTipo',
        descripcion: 'descripcion larga como muestra "hola mundo"',
        nombreRepresentante: 'mark',
        apellidoRepresentante: 'evans',
        rolRepresentante: 'suRol2',
        emailRepresentante: 'emailrepresentante2@gmail.com',
<<<<<<< HEAD
        tipoTelefono1: 'fijo',
        telefono1: '34672465',
        tipoTelefono2: 'fijo',
        telefono2: '34672468',
        terminosYCondiciones: false,
=======
        tipoTelefono1: '01',
        telefono1: '3467',
        tipoTelefono2: '02',
        telefono2: '3467',
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
<<<<<<< HEAD
        estado: 'pendiente',
        nombreComercial: 'LG',
        provinciaActual: 'Formosa',
=======
        nombreComercial: 'LG',
        provincia: 'Formosa',
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
        localidad: 'formosa',
        direccion: 'unaDireccion3',
        piso: '6',
        codigoPostal: '1201',
<<<<<<< HEAD
        departamento: '00',
        razonSocial: 'unaRazonSocial3',
        cuit: '6723367',
        tipoEmpleador: 'elTipo3',
        telefono: '968224657',
        areaDeInteres: 'area interesante3',
=======
        departamento: 'test3',
        razonSocial: 'unaRazonSocial3',
        cuit: '6723',
        tipoEmpleador: 'elTipo3',
        telefono: '9682',
        areaInteres: 'area interesante3',
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
        sitioWeb: 'reactCodeJS.edu.com',
        email: 'react@microsoft.com',
        tipoEmpresa: 'unTipo3',
        descripcion:
          'descripcion parte 3 para alargar esto y no sea repetitivo',
        nombreRepresentante: 'axel',
        apellidoRepresentante: 'blaze',
        rolRepresentante: 'suRol',
        emailRepresentante: 'emailrepresentante1@gmail.com',
<<<<<<< HEAD
        tipoTelefono1: 'fijo',
        telefono1: '14662356',
        tipoTelefono2: 'fijo',
        telefono2: '93497777',
        terminosYCondiciones: false,
=======
        tipoTelefono1: '01',
        telefono1: '1466',
        tipoTelefono2: '02',
        telefono2: '9349',
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('registro', null, {});
  },
};
