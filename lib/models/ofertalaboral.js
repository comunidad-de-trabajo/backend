'use strict';
const { Model, DataTypes } = require('sequelize');

export default class OfertaLaboral extends Model {
  static init(sequelize) {
    return super.init(
      {
        fechaVigencia: DataTypes.STRING,
        tituloBusqueda: DataTypes.STRING,
        descripcionEmpresa: DataTypes.STRING,
        mision: DataTypes.STRING,
        responsabilidades: DataTypes.STRING,
        secundarioCompleto: DataTypes.STRING,
        paqueteOffice: DataTypes.STRING,
        licenciaConducir: DataTypes.STRING,
        edad: DataTypes.STRING,
        desdeEdad: DataTypes.INTEGER,
        hastaEdad: DataTypes.INTEGER,
        experienciaPrevia: DataTypes.STRING,
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
        estado: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'OfertaLaboral',
        freezeTableName: true,
      }
    );
  }
}
