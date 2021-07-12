import express from 'express';
import {
  get,
  getId,
  create,
  updateId,
  destroyId,
  cambiarEstado,
} from '../controllers/registro_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(get));
router.get('/:id', withErrorHandling(getId));
router.post('/', withErrorHandling(create));
router.put('/:id', withErrorHandling(updateId));
router.delete('/:id', withErrorHandling(destroyId));
router.patch('/updateEstado', withErrorHandling(cambiarEstado));

export default router;
