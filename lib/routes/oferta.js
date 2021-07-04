import express from 'express';
import { withErrorHandling } from './utils';
import {
  crearOferta,
  listarOfertas,
} from '../controllers/registro_oferta_controller';

const router = express.Router();

router.get('/listar', withErrorHandling(listarOfertas));
router.post('/crear', withErrorHandling(crearOferta));

export default router;
