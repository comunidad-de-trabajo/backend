import express from 'express';
import envioMailsMailJet from './envioMailsMailJet';
import registro from './registro';
import oferta from './oferta';

const router = express.Router();

router.use('/api/envio_mails', envioMailsMailJet);
router.use('/api/registro', registro);
router.use('/api/oferta', oferta);

export default router;
