import { Storage } from '@google-cloud/storage';
import path from 'path';

export const uploadImage = async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const gc = new Storage({
    keyFilename: path.join(__dirname, '../../../gcs-credentials.json'),
    projectId: 'comunidad-trabajo-unahur',
  });
  const bucket = gc.bucket('comunidad-trabajo-empresas');
  const carpeta = 'empresas-logos';
  const completeFileName = `${carpeta}/${res.get('id')}-${
    req.body.nombreComercial
  }`;
  const file = bucket.file(completeFileName);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  stream.on('error', (err) => {
    req.file.cloudStorageError = err;
    next(err);
  });

  stream.on('finish', () => {
    req.file.cloudStorageObject = completeFileName;
    next();
  });

  stream.end(req.file.buffer);
};
