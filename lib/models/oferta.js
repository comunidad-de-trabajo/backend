import { Model, DataTypes } from 'sequelize';

export default class Oferta extends Model {
  static init(sequelize) {
    return super.init(
      {
        fechaVigencia: DataTypes.STRING,
        tituloBusqueda: DataTypes.STRING,
        descripcionEmpresa: DataTypes.STRING,
        mision: DataTypes.STRING,
        responsabilidades: DataTypes.STRING,
        secundarioCompleto: DataTypes.BOOLEAN,
        paqueteOffice: DataTypes.BOOLEAN,
        licenciaConducir: DataTypes.BOOLEAN,
        edad: DataTypes.BOOLEAN,
        desdeEdad: DataTypes.INTEGER,
        hastaEdad: DataTypes.INTEGER,
        experienciaPrevia: DataTypes.BOOLEAN,
        experienciaPreviaDescription: DataTypes.STRING,
        residencia: DataTypes.STRING,
        areasEstudio: DataTypes.STRING,
        competencias: DataTypes.STRING,
        otrosDetalles: DataTypes.STRING,
        jornada: DataTypes.STRING,
        contrato: DataTypes.STRING,
        lugarTrabajo: DataTypes.STRING,
        ofrecen: DataTypes.STRING,
        nombreCompletoRepresentante: DataTypes.STRING,
        emailRepresentante: DataTypes.STRING,
        detalles: DataTypes.STRING,
        otrasAclaraciones: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Oferta',
        freezeTableName: true,
      }
    );
  }
}
