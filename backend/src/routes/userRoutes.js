import express from 'express';
import { protect, authorize } from '../middlewares/authMiddleware.js';
import { createUser, listUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', protect, authorize('admin', 'employee'), listUsers);
router.get('/:id', protect, authorize('admin', 'employee'), getUser);
router.post('/', protect, authorize('admin'), createUser);
router.put('/:id', protect, authorize('admin'), updateUser);
router.delete('/:id', protect, authorize('admin'), deleteUser);

export default router;
