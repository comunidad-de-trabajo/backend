import { Storage } from '@google-cloud/storage';
import path from 'path';
import config from '../config/config';
import Registro from '../models/registro';
import usuario from '../models/usuario';
const jwt = require('jsonwebtoken');

export const uploadImage = async (file, registro) => {
  if (!file) {
    throw new Error('FILE_NOT_FOUND');
  }

  const gc = new Storage({
    keyFilename: path.join(__dirname, '../../../gcs-credentials.json'),
    projectId: 'comunidad-trabajo-unahur',
  });
  const bucket = gc.bucket('comunidad-trabajo-empresas');
  const carpeta = 'empresas-logos';
  const completeFileName = `${carpeta}/${registro.id}-${registro.nombreComercial}`;
  const newFile = bucket.file(completeFileName);

  const stream = newFile.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  return new Promise((resolve, reject) => {
    stream.on('error', () => {
      reject();
    });

    stream.on('finish', () => {
      file.cloudStorageObject = completeFileName;
      resolve();
    });

    stream.end(file.buffer);
  });
};

export const createRegistro = async (body) => {
  const { mailjetData } = config;
  const { SECRET_JWT_SEED } = mailjetData;
  try {
    const payload = jwt.verify(body.token, SECRET_JWT_SEED);
    const usuarioCorrespondiente = await usuario.findOne({
      where: { email: payload.email },
    });
    const registro = await Registro.create({
      estado: body.estado,
      nombreComercial: body.nombreComercial,
      provinciaActual: body.provinciaActual,
      localidad: body.localidad,
      direccion: body.direccion,
      piso: body.piso,
      codigoPostal: body.codigoPostal,
      departamento: body.departamento,
      razonSocial: body.razonSocial,
      cuit: body.cuit,
      tipoEmpleador: body.tipoEmpleador,
      telefono: body.telefono,
      areaDeInteres: body.areaDeInteres,
      sitioWeb: body.sitioWeb,
      email: body.email,
      tipoEmpresa: body.tipoEmpresa,
      descripcion: body.telefono,
      nombreRepresentante: body.nombreRepresentante,
      apellidoRepresentante: body.apellidoRepresentante,
      rolRepresentante: body.rolRepresentante,
      emailRepresentante: body.emailRepresentante,
      tipoTelefono1: body.tipoTelefono1,
      telefono1: body.telefono1,
      tipoTelefono2: body.tipoTelefono2,
      telefono2: body.telefono,
      terminosYCondiciones: body.terminosYCondiciones,
      urlImagen: '',
      usuarioId: usuarioCorrespondiente.id,
    });
    registro.urlImagen = `https://storage.googleapis.com/comunidad-trabajo-empresas/empresas-logos/${registro.id}-${registro.nombreComercial}`;
    await registro.save();
    return registro;
  } catch (err) {
    console.log(err);
    throw new Error('CREATION_ERROR');
  }
};
