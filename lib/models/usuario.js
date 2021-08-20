import { Model, DataTypes } from 'sequelize';

export default class usuario extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombreUsuario: DataTypes.STRING,
        contrasenia: DataTypes.STRING,
        rol: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'usuario',
        freezeTableName: true,
      }
    );
  }
}
