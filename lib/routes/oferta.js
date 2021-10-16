import express from 'express';
import { withErrorHandling } from './utils';
import {
  cambiarEstado,
  crearOferta,
  get,
  getId,
  destroyId,
  updateId,
} from '../controllers/registro_oferta_controller';

const router = express.Router();
router.patch('/:id', withErrorHandling(updateId));
router.delete('/:id', withErrorHandling(destroyId));
router.get('/detalle', withErrorHandling(getId));
router.get('/listar', withErrorHandling(get));
router.post('/crear', withErrorHandling(crearOferta));
router.post('/cambiarEstado', withErrorHandling(cambiarEstado));

export default router;
