import config from '../config/config';
import OfertaLaboral from '../models/ofertalaboral';
import usuario from '../models/usuario';
const jwt = require('jsonwebtoken');

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
  if (!(req.query.usuario == null)) {
    const { mailjetData } = config;
    const { SECRET_JWT_SEED } = mailjetData;
    try {
      const payload = jwt.verify(req.body.token, SECRET_JWT_SEED);
      const usuarioCorrespondiente = await usuario.findOne({
        where: { email: payload.email },
      });
      let id = usuarioCorrespondiente.id;
      whereObject = {
        usuarioId: id,
      };
      console.log(id);
    } catch (e) {
      console.log(e);
    }
  }

  OfertaLaboral.findAll({
    where: whereObject,
  })
    .then((OfertaLaboral) => res.send(OfertaLaboral))
    .catch(() => res.sendStatus(500));
};

export const getId = async (req, res) => {
  const dato = await OfertaLaboral.findByPk(req.query.id);
  if (dato) {
    res.send(dato);
  } else {
    res.status(404).json({
      message: `No se encontró el dato de la oferta con id ${req.query.id}`,
    });
  }
};

export const updateId = async (req, res) => {
  const onSuccess = (OfertaLaboral) =>
    OfertaLaboral.update(
      {
        fechaVigencia: req.body.fechaVigencia,
        tituloBusqueda: req.body.tituloBusqueda,
        descripcionEmpresa: req.body.descripcionEmpresa,
        mision: req.body.mision,
        responsabilidades: req.body.responsabilidades,
        secundarioCompleto: req.body.secundarioCompleto,
        paqueteOffice: req.body.paqueteOffice,
        licenciaConducir: req.body.licenciaConducir,
        edad: req.body.edad,
        desdeEdad: req.body.desdeEdad,
        hastaEdad: req.body.hastaEdad,
        experienciaPrevia: req.body.experienciaPrevia,
        experienciaPreviaDescription: req.body.experienciaPreviaDescription,
        residencia: req.body.residencia,
        areasEstudio: req.body.areasEstudio,
        competencias: req.body.competencias,
        otrosDetalles: req.body.otrosDetalles,
        jornada: req.body.jornada,
        contrato: req.body.contrato,
        lugarTrabajo: req.body.lugarTrabajo,
        ofrecen: req.body.ofrecen,
        nombreCompletoRepresentante: req.body.nombreCompletoRepresentante,
        emailRepresentante: req.body.emailRepresentante,
        detalles: req.body.detalles,
        otrasAclaraciones: req.body.otrasAclaraciones,
      },
      {
        fields: [
          'fechaVigencia',
          'tituloBusqueda',
          'descripcionEmpresa',
          'mision',
          'responsabilidades',
          'secundarioCompleto',
          'paqueteOffice',
          'licenciaConducir',
          'edad',
          'desdeEdad',
          'hastaEdad',
          'experienciaPrevia',
          'experienciaPreviaDescription',
          'residencia',
          'areasEstudio',
          'competencias',
          'otrosDetalles',
          'jornada',
          'contrato',
          'lugarTrabajo',
          'ofrecen',
          'nombreCompletoRepresentante',
          'emailRepresentante',
          'detalles',
          'otrasAclaraciones',
        ],
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
  const onSuccess = (OfertaLaboral) =>
    OfertaLaboral.destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findTable(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
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

  const { mailjetData } = config;
  const { SECRET_JWT_SEED } = mailjetData;
  try {
    const payload = jwt.verify(req.body.token, SECRET_JWT_SEED);
    const usuarioCorrespondiente = await usuario.findOne({
      where: { email: payload.email },
    });
    const oferta = await OfertaLaboral.create(nuevaOferta);
    let id = usuarioCorrespondiente.id;
    oferta.estado = 'pendiente';
    oferta.usuarioId = id;
    oferta.save();
    res.json({
      nuevaOferta,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'No se ha podido registrar la oferta' });
  }
};

export const cambiarEstado = async (req, res) => {
  let idOferta = req.query.id;
  OfertaLaboral.findByPk(idOferta)
    .then((oferta) =>
      oferta
        ? oferta
            .update({
              estado: req.body.estado,
            })
            .then(() => res.status(200).send('Actualizacion exitosa'))
            .catch((e) => {
              res.status(500).send('Actualizacion fallida: ' + e);
            })
        : res.status(404).send('No se encontro oferta con id: ' + idOferta)
    )
    .catch((e) => {
      res.status(500).send('Error: ' + e);
    });
};
const findTable = (id, { onSuccess, onNotFound, onError }) => {
  OfertaLaboral.findOne({
    where: { id },
  })
    .then((OfertaLaboral) =>
      OfertaLaboral ? onSuccess(OfertaLaboral) : onNotFound()
    )
    .catch(() => onError());
};
