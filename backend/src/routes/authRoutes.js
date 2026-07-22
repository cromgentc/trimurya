import express from 'express';
import { body } from 'express-validator';
import { login, register } from '../controllers/authController.js';
import validate from '../validators/validate.js';

const router = express.Router();

router.post('/register', [body('name').notEmpty(), body('email').isEmail(), body('password').isLength({ min: 6 }), validate], register);
router.post('/login', [body('email').isEmail(), body('password').notEmpty(), validate], login);
router.post('/forgot-password', (req, res) => res.json({ success: true, message: 'Password reset flow ready' }));
router.post('/verify-email', (req, res) => res.json({ success: true, message: 'Email verification flow ready' }));
router.post('/verify-otp', (req, res) => res.json({ success: true, message: 'OTP verification flow ready' }));

export default router;
