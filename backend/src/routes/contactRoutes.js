import express from 'express';
import { body } from 'express-validator';
import { createContactMessage } from '../controllers/contactController.js';
import validate from '../validators/validate.js';

const router = express.Router();

router.post('/', [body('name').notEmpty(), body('email').isEmail(), body('message').notEmpty(), validate], createContactMessage);

export default router;
