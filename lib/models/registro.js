import { Model, DataTypes } from 'sequelize';

export default class registro extends Model {
  static init(sequelize) {
    return super.init(
      {
        estado: DataTypes.STRING,
        nombreComercial: DataTypes.STRING,
        provinciaActual: DataTypes.STRING,
        localidad: DataTypes.STRING,
        direccion: DataTypes.STRING,
        piso: DataTypes.INTEGER,
        codigoPostal: DataTypes.INTEGER,
        departamento: DataTypes.STRING,
        razonSocial: DataTypes.STRING,
        cuit: DataTypes.STRING,
        tipoEmpleador: DataTypes.STRING,
        telefono: DataTypes.INTEGER,
        areaDeInteres: DataTypes.STRING,
        sitioWeb: DataTypes.STRING,
        email: DataTypes.STRING,
        tipoEmpresa: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        nombreRepresentante: DataTypes.STRING,
        apellidoRepresentante: DataTypes.STRING,
        rolRepresentante: DataTypes.STRING,
        emailRepresentante: DataTypes.STRING,
        tipoTelefono1: DataTypes.STRING,
        telefono1: DataTypes.INTEGER,
        tipoTelefono2: DataTypes.STRING,
        telefono2: DataTypes.INTEGER,
        terminosYCondiciones: DataTypes.BOOLEAN,
        urlImagen: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'registro',
        freezeTableName: true,
      }
    );
  }
}
