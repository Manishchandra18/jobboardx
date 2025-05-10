import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import { protect, requireRole } from '../middlewares/authMiddleware.js';

const router = express.Router();

// @route   GET /api/profile/me
// @desc    Get current user's profile
// @access  Private
router.get('/me', protect, getProfile);

// @route   PUT /api/profile
// @desc    Update current user's profile
// @access  Private (Job Seeker only)
router.put('/', protect, requireRole('seeker'), updateProfile);

export default router;
