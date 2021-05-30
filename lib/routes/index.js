import express from 'express';
import usuarios from './usuarios';
import envioMailsMailJet from './envioMailsMailJet';
import empresas from './empresas';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/envio_mails', envioMailsMailJet);
router.use('/api/empresas', empresas);

export default router;
