import DatoRepresentante from '../models/DatoRepresentante';

export const getId = async (req, res) => {
  const datos = await DatoRepresentante.findByPk(req.params.id);
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
  DatoRepresentante.findAll({
    attributes: [
      'id',
      'nombreRepresentante',
      'apellidoRepresentante',
      'rolRepresentante',
      'emailRepresentante',
      'tipoTelefono1',
      'telefono1',
      'tipoTelefono2',
      'telefono2',
    ],
  })
    .then((DatoRepresentante) => res.send(DatoRepresentante))
    .catch(() => res.sendStatus(500));
};

export const create = async (req, res) => {
  DatoRepresentante.create({
    nombreRepresentante: req.body.nombreRepresentante,
    apellidoRepresentante: req.body.apellidoRepresentante,
    rolRepresentante: req.body.rolRepresentante,
    emailRepresentante: req.body.emailRepresentante,
    tipoTelefono1: req.body.tipoTelefono1,
    telefono1: req.body.telefono1,
    tipoTelefono2: req.body.tipoTelefono2,
    telefono2: req.body.telefono,
  })
    .then((DatoRepresentante) =>
      res.status(201).send({ id: DatoRepresentante.id })
    )
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
  const onSuccess = (DatoRepresentante) =>
    DatoRepresentante.update(
      {
        nombreRepresentante: req.body.nombreRepresentante,
        apellidoRepresentante: req.body.apellidoRepresentante,
        rolRepresentante: req.body.rolRepresentante,
        emailRepresentante: req.body.emailRepresentante,
        tipoTelefono1: req.body.tipoTelefono1,
        telefono1: req.body.telefono1,
        tipoTelefono2: req.body.tipoTelefono2,
        telefono2: req.body.telefono2,
      },
      {
        fields: [
          'nombreRepresentante',
          'apellidoRepresentante',
          'rolRepresentante',
          'emailRepresentante',
          'tipoTelefono1',
          'telefono1',
          'tipoTelfono2',
          'telefono2',
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
  const onSuccess = (DatoRepresentante) =>
    DatoRepresentante.destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findTable(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};

const findTable = (id, { onSuccess, onNotFound, onError }) => {
  DatoRepresentante.findOne({
    attributes: [
      'id',
      'nombreRepresentante',
      'apellidoRepresentante',
      'rolRepresentante',
      'emailRepresentante',
      'tipoTelefono1',
      'telefono1',
      'tipoTelefono2',
      'telefono2',
    ],
    where: { id },
  })
    .then((DatoRepresentante) =>
      DatoRepresentante ? onSuccess(DatoRepresentante) : onNotFound()
    )
    .catch(() => onError());
};
