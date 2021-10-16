import config from '../config/config';
import registro from '../models/registro';
import usuario from '../models/usuario';
import Usuario from '../models/usuario';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
  const user = req.body.email;
  const password = req.body.contrasenia;
  const rol = req.body.rol;

  let contraseniaHasheada = await bcrypt.hash(password, 10);
  const userExiste = await Usuario.findOne({
    where: { email: user },
  });

  if (userExiste == null) {
    const expiracion = 3000;

    const token = await jwt.sign(
      {
        email: user,
      },
      'secret',
      { expiresIn: expiracion }
    );

    Usuario.create({
      email: user,
      contrasenia: contraseniaHasheada,
      rol: rol,
    })
      .then((Usuario) => res.status(201).send({ id: Usuario.id, token }))
      .catch((error) => {
        console.log(`Error al intentar insertar en la base de datos: ${error}`);
        res.sendStatus(500);
      });
  } else {
    res.status(404).json({
      message: `El usuario ya existe`,
    });
  }
};

export const updateId = async (req, res) => {
  const onSuccess = (Usuario) =>
    Usuario.update(
      {
        email: req.body.email,
        contrasenia: req.body.contrasenia,
        rol: req.body.rol,
      },
      {
        fields: ['email', 'contrasenia', 'rol'],
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
    attributes: ['id', 'email', 'contrasenia', 'rol'],
    where: { id },
  })
    .then((Usuario) => (Usuario ? onSuccess(Usuario) : onNotFound()))
    .catch(() => onError());
};

export const getUserRoleByJWT = async (req, res) => {
  const { mailjetData } = config;
  const { SECRET_JWT_SEED } = mailjetData;
  let resolvedToken = null;
  try {
    resolvedToken = jwt.verify(req.body.token, SECRET_JWT_SEED);
    Usuario.findOne({
      where: { email: resolvedToken.email },
    })
      .then((usuario) =>
        usuario ? res.send({ rol: usuario.rol }) : res.sendStatus(404)
      )
      .catch(() => res.sendStatus(500));
  } catch (ex) {
    res.sendStatus(400);
  }
};

/**
 * Devuelve un objeto con el rol del user y un bool diciendo si esta autenticado o no
 * EDIT: Ahora tambien devuelve si este usuario ya realizo el registro de su empresa.
 * @param {*} req
 * @param {*} res
 */
export const getAuth = async (req, res) => {
  const { SECRET_JWT_SEED } = config;

  let resolvedToken = null;

  const usuarioRegistroEmpresa = async (usuarioId) => {
    let registroCorrespondiente = await registro.findOne({
      where: { usuarioId },
    });
    return registroCorrespondiente != null;
  };

  try {
    resolvedToken = jwt.verify(req.body.token, SECRET_JWT_SEED);
    Usuario.findOne({
      where: { email: resolvedToken.email },
    })
      .then(async (usuario) =>
        usuario
          ? res.send({
              auth: {
                isAuthenticated: true,
                rol: usuario.rol,
                empresaRegistrada: await usuarioRegistroEmpresa(usuario.id),
              },
            })
          : res.sendStatus(404)
      )
      .catch(() => res.sendStatus(500));
  } catch (ex) {
    res.sendStatus(400);
  }
};

/**
 * Obtiene la empresa correspondiente a un usuario segun su id
 */
export const getEmpresa = async (req, res) => {
  try {
    const usuarioParaBuscar = await usuario.findByPk(req.params.id);

    const empresa = await registro.findOne({
      where: { usuarioId: usuarioParaBuscar.id },
    });

    if (usuarioParaBuscar == null || usuarioParaBuscar == undefined) {
      res.sendStatus(400);
    }
    if (empresa == null || empresa == undefined) {
      res.sendStatus(404);
    }
    res.send(empresa);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
