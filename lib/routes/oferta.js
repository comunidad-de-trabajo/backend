import express from 'express';
import { withErrorHandling } from './utils';
import {
  crearOferta,
  get,
  getId,
} from '../controllers/registro_oferta_controller';

const router = express.Router();

router.get('/detalle', withErrorHandling(getId));
router.get('/listar', withErrorHandling(get));
router.post('/crear', withErrorHandling(crearOferta));

export default router;
