import TipoEmpresa from '../models/TipoEmpresa';

export const getId = async (req, res) => {
  const datos = await TipoEmpresa.findByPk(req.params.id);
  if (datos) {
    res.json({ data: datos.toJSON() });
  } else {
    res
      .status(404)
      .json({
        message: `No se encontró el dato de la empresa con id ${req.params.id}`,
      });
  }
};

export const get = async (req, res) => {
  TipoEmpresa.findAll({
    attributes: [
      'id',
      'areaInteres',
      'sitioWeb',
      'email',
      'tipoEmpresa',
      'descripcion',
    ],
  })
    .then((TipoEmpresa) => res.send(TipoEmpresa))
    .catch(() => res.sendStatus(500));
};

export const create = async (req, res) => {
  TipoEmpresa.create({
    areaInteres: req.body.areaInteres,
    sitioWeb: req.body.sitioWeb,
    email: req.body.email,
    tipoEmpresa: req.body.tipoEmpresa,
    descripcion: req.body.telefono,
  })
    .then((TipoEmpresa) => res.status(201).send({ id: TipoEmpresa.id }))
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
  const onSuccess = (TipoEmpresa) =>
    TipoEmpresa.update(
      {
        areaInteres: req.body.areaInteres,
        sitioWeb: req.body.sitioWeb,
        email: req.body.email,
        tipoEmpresa: req.body.tipoEmpresa,
        descripcion: req.body.descripcion,
      },
      {
        fields: [
          'areaInteres',
          'sitioWeb',
          'emial',
          'tipoEmpresa',
          'descripcion',
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
  const onSuccess = (TipoEmpresa) =>
    TipoEmpresa.destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findTable(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};

const findTable = (id, { onSuccess, onNotFound, onError }) => {
  TipoEmpresa.findOne({
    attributes: [
      'id',
      'areaInteres',
      'sitioWeb',
      'email',
      'tipoEmpresa',
      'descripcion',
    ],
    where: { id },
  })
    .then((TipoEmpresa) =>
      TipoEmpresa ? onSuccess(TipoEmpresa) : onNotFound()
    )
    .catch(() => onError());
};
