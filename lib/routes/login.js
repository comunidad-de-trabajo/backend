import express from 'express';
import {
  loginUsuario,
  forgotPassword,
  resetPassword,
} from '../controllers/login_usuario_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/login', withErrorHandling(loginUsuario));
router.put('/forgot-password', withErrorHandling(forgotPassword));
router.put('/reset-password', withErrorHandling(resetPassword));

export default router;
