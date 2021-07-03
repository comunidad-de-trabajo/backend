import express from 'express';
import {
  get,
  getId,
  updateId,
  destroyId,
  cambiarEstado,
} from '../controllers/registro_controller';
import { withErrorHandling } from './utils';
import Multer from 'multer';
import { createRegistro, uploadImage } from '../middlewares/empresas';
import registro from '../models/registro';

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Maximum file size is 10MB
  },
});

const router = express.Router();

router.get('/', withErrorHandling(get));
router.get('/:id', withErrorHandling(getId));
router.post('/', multer.single('imagen'), async (req, res) => {
  try {
    const registro = await createRegistro(req.body);
    await uploadImage(req.file, registro).catch(() => {
      throw new Error('UPLOAD_ERROR');
    });
    return res.status(200).send({
      id: registro.id,
      message: 'Empresa registrada con exito.',
    });
  } catch (error) {
    let mensajeError = error.message;
    if (mensajeError === 'CREATION_ERROR') {
      return res.status(500).send({
        message: 'Error al intentar insertar registro en la base de datos.',
      });
    } else if (
      mensajeError === 'FILE_NOT_FOUND' ||
      mensajeError === 'UPLOAD_ERROR'
    ) {
      return res.status(207).json({
        idEmpresa: registro.id,
        message: 'Empresa registrada, pero el logo no ha podido guardarse.',
      });
    }
  }
});
router.put('/:id', withErrorHandling(updateId));
router.delete('/:id', withErrorHandling(destroyId));
router.patch('/updateEstado', withErrorHandling(cambiarEstado));

export default router;
