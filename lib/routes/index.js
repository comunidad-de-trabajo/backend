import express from 'express';
import envioMailsMailJet from './envioMailsMailJet';
import empresas from './empresas';
import registro from './registro';

const router = express.Router();

router.use('/api/envio_mails', envioMailsMailJet);
router.use('/api/empresas', empresas);
router.use('/api/registro', registro);

export default router;
