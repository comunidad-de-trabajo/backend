import express from 'express';
import { loginUsuario } from '../controllers/login_usuario_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/login', withErrorHandling(loginUsuario));

export default router;
