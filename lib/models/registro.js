import { Model, DataTypes } from 'sequelize';

export default class registro extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombreComercial: DataTypes.STRING,
        provincia: DataTypes.STRING,
        localidad: DataTypes.STRING,
        direccion: DataTypes.STRING,
        piso: DataTypes.INTEGER,
        codigoPostal: DataTypes.INTEGER,
        departamento: DataTypes.STRING,
        razonSocial: DataTypes.STRING,
        cuit: DataTypes.STRING,
        tipoEmpleador: DataTypes.STRING,
        telefono: DataTypes.INTEGER,
        areaInteres: DataTypes.STRING,
        sitioWeb: DataTypes.STRING,
        email: DataTypes.STRING,
        tipoEmpresa: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        nombreRepresentante: DataTypes.STRING,
        apellidoRepresentante: DataTypes.STRING,
        rolRepresentante: DataTypes.STRING,
        emailRepresentante: DataTypes.STRING,
        tipoTelefono1: DataTypes.INTEGER,
        telefono1: DataTypes.INTEGER,
        tipoTelefono2: DataTypes.INTEGER,
        telefono2: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'registro',
        freezeTableName: true,
      }
    );
  }
}
