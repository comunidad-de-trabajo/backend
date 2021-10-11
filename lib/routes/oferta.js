import express from 'express';
import { withErrorHandling } from './utils';
import {
  crearOferta,
  get,
  listarOfertas,
} from '../controllers/registro_oferta_controller';

const router = express.Router();

router.get('/listar', withErrorHandling(get));
router.post('/crear', withErrorHandling(crearOferta));

export default router;
