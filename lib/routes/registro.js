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
import { uploadImage } from '../middlewares/empresas';

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Maximum file size is 10MB
  },
});

const router = express.Router();

router.get('/', withErrorHandling(get));
router.get('/:id', withErrorHandling(getId));
router.post(
  '/',
  multer.single('imagen'),
  [create, uploadImage],
  (req, res, err) => {
    if (req.file) {
      return res.status(200).send({ id: res.get('id') });
    }
    return res.status(207).send({
      error: err,
      message:
        'La empresa ha sido registrada con exito, pero el logo no ha podido ser guardado.',
      idEmpresa: res.get('id'),
    });
  }
);
router.put('/:id', withErrorHandling(updateId));
router.delete('/:id', withErrorHandling(destroyId));
router.patch('/updateEstado', withErrorHandling(cambiarEstado));

export default router;
