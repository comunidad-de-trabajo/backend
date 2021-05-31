import DatoEmpresa from '../models/DatoEmpresa';

export const getId = async (req, res) => {
  const datoEmpresa = await DatoEmpresa.findByPk(req.params.id);
  if (datoEmpresa) {
    res.json({ data: datoEmpresa.toJSON() });
  } else {
    res
      .status(404)
      .json({
        message: `No se encontró el dato de la empresa con id ${req.params.id}`,
      });
  }
};

export const get = async (req, res) => {
  DatoEmpresa.findAll({
    attributes: [
      'id',
      'nombreComercial',
      'provincia',
      'localidad',
      'direccion',
      'piso',
      'codigoPostal',
      'departamento',
      'razonSocial',
      'cuit',
      'tipoEmpleador',
      'telefono',
    ],
  })
    .then((DatoEmpresa) => res.send(DatoEmpresa))
    .catch(() => res.sendStatus(500));
};

export const create = async (req, res) => {
  DatoEmpresa.create({
    nombreComercial: req.body.nombreComercial,
    provincia: req.body.provincia,
    localidad: req.body.localidad,
    direccion: req.body.direccion,
    piso: req.body.piso,
    codigoPostal: req.body.codigoPostal,
    departamento: req.body.departamento,
    razonSocial: req.body.razonSocial,
    cuit: req.body.cuit,
    tipoEmpleador: req.body.tipoEmpleador,
    telefono: req.body.telefono,
  })
    .then((DatoEmpresa) => res.status(201).send({ id: DatoEmpresa.id }))
    .catch((error) => {
      if (error == 'SequelizeUniqueConstraintError: Validation error') {
        res
          .status(400)
          .send('Bad request: existe otra materia con el mismo nombre');
      } else {
        console.log(`Error al intentar insertar en la base de datos: ${error}`);
        res.sendStatus(500);
      }
    });
};

export const updateId = async (req, res) => {
  const onSuccess = (DatoEmpresa) =>
    DatoEmpresa.update(
      {
        nombreComercial: req.body.nombreComercial,
        provincia: req.body.provincia,
        localidad: req.body.localidad,
        direccion: req.body.direccion,
        piso: req.body.piso,
        codigoPostal: req.body.codigoPostal,
        departamento: req.body.departamento,
        razonSocial: req.body.razonSocial,
        cuit: req.body.cuit,
        tipoEmpleador: req.body.tipoEmpleador,
        telefono: req.body.telefono,
      },
      {
        fields: [
          'nombreComercial',
          'provincia',
          'localidad',
          'direccion',
          'piso',
          'codigoPostal',
          'departamento',
          'razonSocial',
          'cuit',
          'tipoEmpleador',
          'telefono',
        ],
      }
    )
      .then(() => res.sendStatus(200))
      .catch((error) => {
        if (error == 'SequelizeUniqueConstraintError: Validation error') {
          res
            .status(400)
            .send('Bad request: existe otra materia con el mismo nombre');
        } else {
          console.log(
            `Error al intentar actualizar la base de datos: ${error}`
          );
          res.sendStatus(500);
        }
      });
  findTable(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};

export const destroyId = async (req, res) => {
  const onSuccess = (DatoEmpresa) =>
    DatoEmpresa.destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findTable(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};

const findTable = (id, { onSuccess, onNotFound, onError }) => {
  DatoEmpresa.findOne({
    attributes: [
      'id',
      'nombreComercial',
      'provincia',
      'localidad',
      'direccion',
      'piso',
      'codigoPostal',
      'departamento',
      'razonSocial',
      'cuit',
      'tipoEmpleador',
      'telefono',
    ],
    where: { id },
  })
    .then((DatoEmpresa) =>
      DatoEmpresa ? onSuccess(DatoEmpresa) : onNotFound()
    )
    .catch(() => onError());
};
