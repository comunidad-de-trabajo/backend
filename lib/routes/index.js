import express from 'express';
import usuarios from './usuarios';
import envioMailsMailJet from './envioMailsMailJet';
import empresas from './empresas';
import datoEmpresa from './datoEmpresa';
import tipoEmpresa from './tipoEmpresa';
import datoRepresentante from './datoRepresentante';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/envio_mails', envioMailsMailJet);
router.use('/api/empresas', empresas);
router.use('/api/datoEmpresa', datoEmpresa);
router.use('/api/tipoEmpresa', tipoEmpresa);
router.use('/api/datoRepresentante', datoRepresentante);

export default router;
