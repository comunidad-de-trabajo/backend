import Usuario from '../models/usuario';

export const getId = async (req, res) => {
  const dato = await Usuario.findByPk(req.params.id);
  if (dato) {
    res.json({ data: dato.toJSON() });
  } else {
    res.status(404).json({
      message: `No se encontró al usuario con esa id ${req.params.id}`,
    });
  }
};

export const get = async (req, res) => {
  Usuario.findAll({})
    .then((Usuario) => res.send(Usuario))
    .catch(() => res.sendStatus(500));
};

export const create = async (req, res) => {
  Usuario.create({
    nombreUsuario: req.body.nombreUsuario,
    contrasenia: req.body.contrasenia,
  })
    .then((Usuario) => res.status(201).send({ id: Usuario.id }))
    .catch((error) => {
      console.log(`Error al intentar insertar en la base de datos: ${error}`);
      res.sendStatus(500);
    });
};

export const updateId = async (req, res) => {
  const onSuccess = (Usuario) =>
    Usuario.update(
      {
        nombreUsuario: req.body.nombreUsuario,
        contrasenia: req.body.contrasenia,
      },
      {
        fields: ['nombreUsuario', 'contrasenia'],
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
  const onSuccess = (Usuario) =>
    Usuario.destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findTable(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};

const findTable = (id, { onSuccess, onNotFound, onError }) => {
  Usuario.findOne({
    attributes: ['id', 'nombreUsuario', 'contrasenia'],
    where: { id },
  })
    .then((Usuario) => (Usuario ? onSuccess(Usuario) : onNotFound()))
    .catch(() => onError());
};
