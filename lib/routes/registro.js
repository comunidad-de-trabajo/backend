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
import Multer from 'multer';

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Maximum file size is 10MB
  },
});

const router = express.Router();

router.get('/', withErrorHandling(get));
router.get('/:id', withErrorHandling(getId));
router.post('/', multer.single('imagen'), withErrorHandling(create));
router.put('/:id', withErrorHandling(updateId));
router.delete('/:id', withErrorHandling(destroyId));
router.patch('/updateEstado', withErrorHandling(cambiarEstado));

export default router;
