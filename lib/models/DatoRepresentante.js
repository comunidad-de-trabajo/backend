import { Model, DataTypes } from 'sequelize';

export default class DatoRepresentante extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombreRepresentante: DataTypes.STRING,
        apellidoRepresentante: DataTypes.STRING,
        rolRepreesentante: DataTypes.STRING,
        emailRepresentante: DataTypes.STRING,
        tipoTelefono1: DataTypes.INTEGER,
        telefono1: DataTypes.INTEGER,
        tipoTelefono2: DataTypes.INTEGER,
        telefono2: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Dato-Representante',
        freezeTableName: true,
      }
    );
  }
}
