import { generarJWT } from '../helper/jwt';
import Usuario from '../models/usuario';
const bcrypt = require('bcrypt');
import { sendEmail } from '../helper/nodemailer';
const jwt = require('jsonwebtoken');
import config from '../config/config';

export const loginUsuario = async (req, res) => {
  const { email, contrasenia } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    console.log(usuario);

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario y/o contraseña incorrecta',
      });
    }

    // Confirmar los passwords
    const validPassword = bcrypt.compareSync(contrasenia, usuario.contrasenia);
    console.log(validPassword);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Contraseña incorrecta',
      });
    }

    // Generar JWT
    const token = await generarJWT(usuario.id, usuario.email);

    res.json({
      success: true,
      email: usuario.email,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

export const forgotPassword = async (req, res) => {
  if (!req.body) return res.status(400).json({ message: 'No request body' });
  if (!req.body.email)
    return res.status(400).json({ message: 'No Email in request body' });

  const { email } = req.body;
  const { CLIENT_URL, SIGNATURE_TOKEN } = config;

  const user = await Usuario.findOne({ where: { email } });
  console.log(user);

  // if err or no user
  if (!user)
    return res.status('401').json({
      message: 'El usuario con este mail no existe!',
    });

  //generate a token with user id and secret
  const token = jwt.sign({ _id: user.id, iss: 'NODEAPI' }, SIGNATURE_TOKEN);

  // email data
  const emailData = {
    from: 'noreply@node-react.com',
    to: email,
    subject: 'Password Reset Instructions',
    text: `Please use the following link to reset your password: ${CLIENT_URL}/resetear-contraseña/${token}`,
    html: `<p>Please use the following link to reset your password:</p> <p>${CLIENT_URL}/resetear-contraseña/${token}</p>`,
  };

  await Usuario.update(
    { reset_password_link: token },
    { where: { id: user.id } }
  );

  sendEmail(emailData);
  return res.status(200).json({
    message: `El mail ha sido enviado a ${email}. Siga las instrucciones para resetear su password.`,
  });
};

export const resetPassword = async (req, res) => {
  const { reset_password_link, password } = req.body;

  const user = await Usuario.findOne({ where: { reset_password_link } });
  console.log(user);

  if (!user)
    return res.status('401').json({
      error: 'Enlace invalido!',
    });

  const passwordHashed = await bcrypt.hash(password, 10);

  await Usuario.update(
    { contrasenia: passwordHashed },
    { where: { reset_password_link } }
  );

  return res.json({ message: 'Se cambio la contraseña correctamente!' });
};
