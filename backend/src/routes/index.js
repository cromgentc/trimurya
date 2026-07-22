import express from 'express';
import authRoutes from './authRoutes.js';
import contactRoutes from './contactRoutes.js';
import contentRoutes from './contentRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/contact', contactRoutes);
router.use('/', contentRoutes);

export default router;
