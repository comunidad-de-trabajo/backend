import OfertaLaboral from '../models/ofertalaboral';

export const listarOfertas = async (req, res) => {
  const ofertas = await OfertaLaboral.findAll();
  res.json(ofertas);
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
