import express from 'express';
import { getInstitutionProfile, updateInstitutionProfile, createCourse, getMyCourses, getCourseApplications, updateApplicationStatus } from '../controllers/institutionController';
import { protect, authorize } from '../middleware/authMiddleware';
import { UserRole } from '../models/User';
import { validateRequest } from '../middleware/validateRequest';
import { z } from 'zod';
import { ApplicationStatus } from '../models/Application';

const router = express.Router();

router.use(protect);
router.use(authorize(UserRole.INSTITUTION, UserRole.ADMIN));

const updateProfileSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        website: z.string().url().optional(),
        contactEmail: z.string().email().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
        logoUrl: z.string().url().optional()
    })
});

const createCourseSchema = z.object({
    body: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        categoryId: z.string().min(24),
        durationMonths: z.number().positive(),
        fees: z.number().nonnegative(),
        requirements: z.string().optional(),
        thumbnailUrl: z.string().url().optional()
    })
});

const updateAppStatusSchema = z.object({
    body: z.object({
        status: z.nativeEnum(ApplicationStatus)
    })
});

router.get('/profile', getInstitutionProfile);
router.put('/profile', validateRequest(updateProfileSchema), updateInstitutionProfile);

router.post('/courses', validateRequest(createCourseSchema), createCourse);
router.get('/courses', getMyCourses);

router.get('/applications', getCourseApplications);
router.put('/applications/:id/status', validateRequest(updateAppStatusSchema), updateApplicationStatus);

export default router;
