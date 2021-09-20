import { generarJWT } from '../helper/jwt';
import Usuario from '../models/usuario';
const bcrypt = require('bcrypt');

export const loginUsuario = async (req, res) => {
  const { email, contrasenia } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    console.log(usuario);

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario no existe con ese email',
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
    const token = await generarJWT(usuario.nombreUsuario, usuario.contrasenia);

    res.json({
      success: true,
      nombreUsuario: usuario.nombreUsuario,
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
