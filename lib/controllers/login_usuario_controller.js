import Usuario from '../models/usuario';

export const loginUsuario = async (req, res) => {
  const { nombreUsuario, contrasenia } = req.body;
  try {
    const usuario = await Usuario.findOne({ nombreUsuario });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario no existe con ese email',
      });
    }

    console.log(contrasenia);

    // Confirmar los passwords
    // const validPassword = bcrypt.compareSync( contrasenia, usuario.contrasenia );

    // if ( !validPassword ) {
    //     return res.status(400).json({
    //         ok: false,
    //         msg: 'Password incorrecto'
    //     });
    // }

    // Generar JWT
    // const token = await generarJWT( usuario.id, usuario.name );

    // res.json({
    //     ok: true,
    //     uid: usuario.id,
    //     name: usuario.name,
    //     token
    // })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};
