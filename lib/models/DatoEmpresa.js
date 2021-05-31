import { Model, DataTypes } from 'sequelize';

export default class DatoEmpresa extends Model {
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
      },
      {
        sequelize,
        modelName: 'Dato-Empresa',
        freezeTableName: true,
      }
    );
  }
}
