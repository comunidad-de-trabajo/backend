import { Model, DataTypes } from 'sequelize';

export default class registro extends Model {
  static init(sequelize) {
    return super.init(
      {
<<<<<<< HEAD
        estado: DataTypes.STRING,
        nombreComercial: DataTypes.STRING,
        provinciaActual: DataTypes.STRING,
=======
        nombreComercial: DataTypes.STRING,
        provincia: DataTypes.STRING,
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
        localidad: DataTypes.STRING,
        direccion: DataTypes.STRING,
        piso: DataTypes.INTEGER,
        codigoPostal: DataTypes.INTEGER,
<<<<<<< HEAD
        departamento: DataTypes.INTEGER,
        razonSocial: DataTypes.STRING,
        cuit: DataTypes.INTEGER,
        tipoEmpleador: DataTypes.STRING,
        telefono: DataTypes.INTEGER,
        areaDeInteres: DataTypes.STRING,
=======
        departamento: DataTypes.STRING,
        razonSocial: DataTypes.STRING,
        cuit: DataTypes.STRING,
        tipoEmpleador: DataTypes.STRING,
        telefono: DataTypes.INTEGER,
        areaInteres: DataTypes.STRING,
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
        sitioWeb: DataTypes.STRING,
        email: DataTypes.STRING,
        tipoEmpresa: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        nombreRepresentante: DataTypes.STRING,
        apellidoRepresentante: DataTypes.STRING,
        rolRepresentante: DataTypes.STRING,
        emailRepresentante: DataTypes.STRING,
<<<<<<< HEAD
        tipoTelefono1: DataTypes.STRING,
        telefono1: DataTypes.INTEGER,
        tipoTelefono2: DataTypes.STRING,
        telefono2: DataTypes.INTEGER,
        terminosYCondiciones: DataTypes.BOOLEAN,
=======
        tipoTelefono1: DataTypes.INTEGER,
        telefono1: DataTypes.INTEGER,
        tipoTelefono2: DataTypes.INTEGER,
        telefono2: DataTypes.INTEGER,
>>>>>>> bcfcb54 (paginacion y CRUD registro de datos OK)
      },
      {
        sequelize,
        modelName: 'registro',
        freezeTableName: true,
      }
    );
  }
}
