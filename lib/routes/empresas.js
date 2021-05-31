import express from 'express';
import Multer from 'multer';
import { uploadImage } from '../middlewares/empresas';

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Maximum file size is 10MB
  },
});

const router = express.Router();

router.post(
  '/uploadImage',
  multer.single('imagen'),
  uploadImage,
  (req, res) => {
    if (req.file) {
      return res.status(200).send('La imagen se subio con exito.');
    }

    return res.status(500).send('Error al subir la imagen.');
  }
);

export default router;
