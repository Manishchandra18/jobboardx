import express from 'express';
import { protect, requireRole } from '../middlewares/authMiddleware.js';
import {
  applyToJob,
  getMyApplications,
  getApplicantsByJobId,
  withdrawApplication,
  updateApplicationStatus,
  getAllApplicantsForEmployer,
} from '../controllers/applicationController.js';

const router = express.Router();

// Seeker routes
router.post('/', protect, requireRole('seeker'), applyToJob);
router.get('/me', protect, requireRole('seeker'), getMyApplications);
router.delete('/:id', protect, requireRole('seeker'), withdrawApplication);

// Employer routes
router.get('/job/:jobId', protect, requireRole('employer'), getApplicantsByJobId);
router.patch('/:id/status', protect, requireRole('employer'), updateApplicationStatus);
router.get('/employer', protect, requireRole('employer'), getAllApplicantsForEmployer);

export default router;
