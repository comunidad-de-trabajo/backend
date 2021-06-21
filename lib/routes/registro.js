import express from 'express';
import {
  get,
  getId,
  getPag,
  create,
  updateId,
  destroyId,
} from '../controllers/registro_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(get));
router.get('/pag/', withErrorHandling(getPag));
router.get('/:id', withErrorHandling(getId));
router.post('/', withErrorHandling(create));
router.put('/:id', withErrorHandling(updateId));
router.delete('/:id', withErrorHandling(destroyId));

export default router;