import express from 'express';
import envioMailsMailJet from './envioMailsMailJet';
import registro from './registro';
import oferta from './oferta';
import usuario from './usuario';
import login from './login';

const router = express.Router();

router.use('/api/envio_mails', envioMailsMailJet);
router.use('/api/registro', registro);
router.use('/api/oferta', oferta);
router.use('/api/usuario', usuario);
router.use('/api', login);

export default router;
