import express from 'express';
import { withErrorHandling } from './utils';
import {
  cambiarEstado,
  crearOferta,
  get,
  getId,
} from '../controllers/registro_oferta_controller';

const router = express.Router();

router.get('/detalle', withErrorHandling(getId));
router.get('/listar', withErrorHandling(get));
router.post('/crear', withErrorHandling(crearOferta));
router.post('/cambiarEstado', withErrorHandling(cambiarEstado));

export default router;
