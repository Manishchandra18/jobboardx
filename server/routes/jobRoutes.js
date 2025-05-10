import express from 'express';
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  getMyJobs,
} from '../controllers/jobController.js';
import { protect, requireRole } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public Routes
router.get('/', getAllJobs);
router.get('/my', protect, requireRole('employer'), getMyJobs);
router.get('/:id', getJobById);

// Employer-only Routes
router.post('/', protect, requireRole('employer'), createJob);
router.put('/:id', protect, requireRole('employer'), updateJob);
router.delete('/:id', protect, requireRole('employer'), deleteJob);
router.get('/my', protect, requireRole('employer'), getMyJobs);

export default router;
