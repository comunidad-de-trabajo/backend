const jwt = require('jsonwebtoken');
import config from '../config/config';

const generarJWT = (id, email) => {
  const { SECRET_JWT_SEED } = config;

  return new Promise((resolve, reject) => {
    const payload = { id, email };

    jwt.sign(
      payload,
      SECRET_JWT_SEED,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el token');
        }

        resolve(token);
      }
    );
  });
};

module.exports = {
  generarJWT,
};
