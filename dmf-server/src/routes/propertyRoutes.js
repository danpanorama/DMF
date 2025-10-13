import express from 'express';
import { getAllProperties, getPropertyById, createProperty } from '../controllers/propertyController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

// everyone can view properties
router.get('/', getAllProperties);
router.get('/:id', getPropertyById);

// only admin can add new properties
router.post('/', protect, authorize('admin'), createProperty);

export default router;
