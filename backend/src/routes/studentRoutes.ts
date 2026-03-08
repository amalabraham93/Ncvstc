import express from 'express';
import { getStudentProfile, saveCourse, applyForCourse, getMyApplications, verifyStudentCertificate } from '../controllers/studentController';
import { protect, authorize } from '../middleware/authMiddleware';
import { UserRole } from '../models/User';
import { validateRequest } from '../middleware/validateRequest';
import { z } from 'zod';

const router = express.Router();

// Public route
router.get('/verify/:enrollmentNo', verifyStudentCertificate);

router.use(protect);
router.use(authorize(UserRole.STUDENT, UserRole.ADMIN));

const applySchema = z.object({
    body: z.object({
        courseId: z.string().min(24),
        documents: z.array(z.string().url()).optional(),
        notes: z.string().optional()
    })
});

const saveCourseSchema = z.object({
    body: z.object({
        courseId: z.string().min(24)
    })
});

router.get('/profile', getStudentProfile);
router.post('/save-course', validateRequest(saveCourseSchema), saveCourse);
router.post('/apply', validateRequest(applySchema), applyForCourse);
router.get('/applications', getMyApplications);

export default router;
