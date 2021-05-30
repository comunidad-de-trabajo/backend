import express from 'express';
import usuarios from './usuarios';
import envioMailsMailJet from './envioMailsMailJet';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/envio_mails', envioMailsMailJet);

export default router;
