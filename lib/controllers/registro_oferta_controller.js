import OfertaLaboral from '../models/ofertalaboral';

export const listarOfertas = async (req, res) => {
  const ofertas = await OfertaLaboral.findAll();
  res.json(ofertas);
};

export const crearOferta = async (req, res) => {
  const {
    fechaVigencia,
    tituloBusqueda,
    descripcionEmpresa,
    mision,
    responsabilidades,
    secundarioCompleto,
    paqueteOffice,
    licenciaConducir,
    edad,
    desdeEdad,
    hastaEdad,
    experienciaPrevia,
    experienciaPreviaDescription,
    residencia,
    areasEstudio,
    competencias,
    otrosDetalles,
    jornada,
    contrato,
    lugarTrabajo,
    ofrecen,
    nombreCompletoRepresentante,
    emailRepresentante,
    detalles,
    otrasAclaraciones,
  } = req.body;

  try {
    await OfertaLaboral.create({
      fechaVigencia,
      tituloBusqueda,
      descripcionEmpresa,
      mision,
      responsabilidades,
      secundarioCompleto,
      paqueteOffice,
      licenciaConducir,
      edad,
      desdeEdad,
      hastaEdad,
      experienciaPrevia,
      experienciaPreviaDescription,
      residencia,
      areasEstudio,
      competencias,
      otrosDetalles,
      jornada,
      contrato,
      lugarTrabajo,
      ofrecen,
      nombreCompletoRepresentante,
      emailRepresentante,
      detalles,
      otrasAclaraciones,
    });
    res.json({
      oferta: req.body,
    });
  } catch (error) {
    res.status(500).json({ message: 'No se ha podido registrar la oferta' });
  }
};
