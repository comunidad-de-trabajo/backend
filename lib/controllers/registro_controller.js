import Registro from '../models/registro';

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

export const getPag = async (req, res) => {
  const { numPagina, tamanioPagina } = req.query;
  /*para llamarlo ...api/registro/pag?numPagina=2&tamanioPagina=2*/
  Registro.findAll({
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
    ],
    offset: (Number(numPagina) - 1) * Number(tamanioPagina),
    limit: Number(tamanioPagina),
  })
    .then((Registro) => res.send(Registro))
    .catch(() => res.sendStatus(500));
};

export const get = async (req, res) => {
  Registro.findAll({
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
    ],
  })
    .then((Registro) => res.send(Registro))
    .catch(() => res.sendStatus(500));
};

export const create = async (req, res) => {
  Registro.create({
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
    descripcion: req.body.telefono,
    nombreRepresentante: req.body.nombreRepresentante,
    apellidoRepresentante: req.body.apellidoRepresentante,
    rolRepresentante: req.body.rolRepresentante,
    emailRepresentante: req.body.emailRepresentante,
    tipoTelefono1: req.body.tipoTelefono1,
    telefono1: req.body.telefono1,
    tipoTelefono2: req.body.tipoTelefono2,
    telefono2: req.body.telefono,
    terminosYCondiciones: req.body.terminosYCondiciones,
  })
    .then((Registro) => res.status(201).send({ id: Registro.id }))
    .catch((error) => {
      console.log(`Error al intentar insertar en la base de datos: ${error}`);
      res.sendStatus(500);
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
    ],
    where: { id },
  })
    .then((Registro) => (Registro ? onSuccess(Registro) : onNotFound()))
    .catch(() => onError());
};
