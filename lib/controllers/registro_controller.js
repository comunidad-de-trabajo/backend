import Registro from '../models/registro';
import { createRegistro, uploadImage } from '../middlewares/empresas';

export const getId = async (req, res) => {
  const dato = await Registro.findByPk(req.params.id);
  if (dato) {
    res.json({ data: dato.toJSON() });
  } else {
    res.status(404).json({
      message: `No se encontró el dato de la empresa con id ${req.params.id}`,
    });
  }
};

export const get = async (req, res) => {
  const { Op } = require('sequelize');
  var whereObject = {};

  if (req.query.estado == null) {
    whereObject = {
      [Op.or]: [
        { estado: 'pendiente' },
        { estado: 'aceptada' },
        { estado: 'rechazada' },
      ],
    };
  } else {
    whereObject = {
      estado: req.query.estado,
    };
  }

  Registro.findAll({
    where: whereObject,
  })
    .then((Registro) => res.send(Registro))
    .catch(() => res.sendStatus(500));
};

export const create = async (req, res) => {
  try {
    var registro = await createRegistro(req.body);
    await uploadImage(req.file, registro).catch(() => {
      throw new Error('UPLOAD_ERROR');
    });
  } catch (error) {
    let mensajeError = error.message;
    if (mensajeError === 'CREATION_ERROR') {
      return res.status(500).send({
        message: 'Error al intentar insertar registro en la base de datos.',
      });
    } else if (
      mensajeError === 'FILE_NOT_FOUND' ||
      mensajeError === 'UPLOAD_ERROR'
    ) {
      return res.status(207).send({
        id: registro.id,
        message: 'Empresa registrada, pero el logo no ha podido guardarse.',
      });
    }
  }
  return res.status(200).send({
    id: registro.id,
    message: 'Empresa registrada con exito.',
  });
};

export const updateId = async (req, res) => {
  const onSuccess = (Registro) =>
    Registro.update(
      {
        estado: req.body.estado,
        nombreComercial: req.body.nombreComercial,
        provinciaActual: req.body.provinciaActual,
        localidad: req.body.localidad,
        direccion: req.body.direccion,
        piso: req.body.piso,
        codigoPostal: req.body.codigoPostal,
        departamento: req.body.departamento,
        razonSocial: req.body.razonSocial,
        cuit: req.body.cuit,
        tipoEmpleador: req.body.tipoEmpleador,
        telefono: req.body.telefono,
        areaDeInteres: req.body.areaDeInteres,
        sitioWeb: req.body.sitioWeb,
        email: req.body.email,
        tipoEmpresa: req.body.tipoEmpresa,
        descripcion: req.body.descripcion,
        nombreRepresentante: req.body.nombreRepresentante,
        apellidoRepresentante: req.body.apellidoRepresentante,
        rolRepresentante: req.body.rolRepresentante,
        emailRepresentante: req.body.emailRepresentante,
        tipoTelefono1: req.body.tipoTelefono1,
        telefono1: req.body.telefono1,
        tipoTelefono2: req.body.tipoTelefono2,
        telefono2: req.body.telefono2,
        terminosYCondiciones: req.body.terminosYCondiciones,
        urlImagen: req.body.urlImagen,
      },
      {
        fields: [
          'estado',
          'nombreComercial',
          'provinciaActual',
          'localidad',
          'direccion',
          'piso',
          'codigoPostal',
          'departamento',
          'razonSocial',
          'cuit',
          'tipoEmpleador',
          'telefono',
          'areaDeInteres',
          'sitioWeb',
          'emial',
          'tipoEmpresa',
          'descripcion',
          'nombreRepresentante',
          'apellidoRepresentante',
          'rolRepresentante',
          'emailRepresentante',
          'tipoTelefono1',
          'telefono1',
          'tipoTelfono2',
          'telefono2',
          'terminosYCondiciones',
        ],
      }
    )
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.log(`Error al intentar actualizar la base de datos: ${error}`);
        res.sendStatus(500);
      });
  findTable(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};

export const destroyId = async (req, res) => {
  const onSuccess = (Registro) =>
    Registro.destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findTable(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};

const findTable = (id, { onSuccess, onNotFound, onError }) => {
  Registro.findOne({
    attributes: [
      'id',
      'estado',
      'nombreComercial',
      'provinciaActual',
      'localidad',
      'direccion',
      'piso',
      'codigoPostal',
      'departamento',
      'razonSocial',
      'cuit',
      'tipoEmpleador',
      'telefono',
      'areaDeInteres',
      'sitioWeb',
      'email',
      'tipoEmpresa',
      'descripcion',
      'nombreRepresentante',
      'apellidoRepresentante',
      'rolRepresentante',
      'emailRepresentante',
      'tipoTelefono1',
      'telefono1',
      'tipoTelefono2',
      'telefono2',
      'terminosYCondiciones',
      'urlImagen',
    ],
    where: { id },
  })
    .then((Registro) => (Registro ? onSuccess(Registro) : onNotFound()))
    .catch(() => onError());
};

export const cambiarEstado = async (req, res) => {
  let idEmpresa = req.query.id;
  Registro.findByPk(idEmpresa)
    .then((registro) =>
      registro
        ? registro
            .update({
              estado: req.body.estado,
            })
            .then(() => res.status(200).send('Actualizacion exitosa'))
            .catch((e) => {
              res.status(500).send('Actualizacion fallida: ' + e);
            })
        : res.status(404).send('No se encontro empresa con id: ' + idEmpresa)
    )
    .catch((e) => {
      res.status(500).send('Error: ' + e);
    });
};
