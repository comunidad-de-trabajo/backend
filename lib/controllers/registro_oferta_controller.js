import OfertaLaboral from '../models/ofertalaboral';

export const listarOfertas = async (req, res) => {
  const ofertas = await OfertaLaboral.findAll();
  res.json(ofertas);
};

export const crearOferta = async (req, res) => {
  const { nuevaOferta } = req.body;

  try {
    await OfertaLaboral.create(nuevaOferta);

    res.json({
      nuevaOferta,
    });
  } catch (error) {
    res.status(500).json({ message: 'No se ha podido registrar la oferta' });
  }
};
