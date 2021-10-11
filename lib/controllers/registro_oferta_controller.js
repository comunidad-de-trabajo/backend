import OfertaLaboral from '../models/ofertalaboral';

export const get = async (req, res) => {
  const { Op } = require('sequelize');
  var whereObject = {};
  console.log(req.query.estado);

  if (req.query.estado == null) {
    whereObject = {
      [Op.or]: [
        { estado: 'pendiente' },
        { estado: 'enviada' },
        { estado: 'vencida' },
      ],
    };
  } else {
    whereObject = {
      estado: req.query.estado,
    };
  }

  OfertaLaboral.findAll({
    where: whereObject,
  })
    .then((OfertaLaboral) => res.send(OfertaLaboral))
    .catch(() => res.sendStatus(500));
};

export const crearOferta = async (req, res) => {
  const { nuevaOferta } = req.body;
  if (nuevaOferta.edad === 'no') {
    nuevaOferta.desdeEdad = null;
    nuevaOferta.hastaEdad = null;
  }
  if (nuevaOferta.experienciaPrevia === 'no') {
    nuevaOferta.experienciaPrevia = null;
  }

  try {
    await OfertaLaboral.create(nuevaOferta);

    res.json({
      nuevaOferta,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'No se ha podido registrar la oferta' });
  }
};
