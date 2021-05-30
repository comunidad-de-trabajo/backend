import express from 'express';

import { envioMailsIndividual } from '../controllers/envio_mails_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/individual', withErrorHandling(envioMailsIndividual));

export default router;
