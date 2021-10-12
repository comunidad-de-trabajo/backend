import express from 'express';
import {
  get,
  getId,
  create,
  updateId,
  destroyId,
  getAuth,
  forgotPassword,
} from '../controllers/usuario_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(get));
router.get('/:id', withErrorHandling(getId));
router.post('/', withErrorHandling(create));
router.put('/:id', withErrorHandling(updateId));
router.delete('/:id', withErrorHandling(destroyId));
router.post('/getAuth', withErrorHandling(getAuth));
router.put('/forgotPassword/:id', withErrorHandling(forgotPassword));

export default router;
