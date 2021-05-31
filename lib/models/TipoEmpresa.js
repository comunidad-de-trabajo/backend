import { Model, DataTypes } from 'sequelize';

export default class tipoEmpresa extends Model {
  static init(sequelize) {
    return super.init(
      {
        areaInteres: DataTypes.STRING,
        sitioWeb: DataTypes.STRING,
        email: DataTypes.STRING,
        tipoEmpresa: DataTypes.STRING,
        descripcion: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Tipo-Empresa',
        freezeTableName: true,
      }
    );
  }
}
