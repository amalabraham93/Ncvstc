import express from 'express';
import { getPlatformStats, getAllUsers, verifyInstitution, createCategory } from '../controllers/adminController';
import { protect, authorize } from '../middleware/authMiddleware';
import { UserRole } from '../models/User';
import { validateRequest } from '../middleware/validateRequest';
import { z } from 'zod';
import { VerificationStatus } from '../models/Institution';

const router = express.Router();

router.use(protect);
router.use(authorize(UserRole.ADMIN));

const verifySchema = z.object({
    body: z.object({
        status: z.nativeEnum(VerificationStatus)
    })
});

const categorySchema = z.object({
    body: z.object({
        name: z.string(),
        slug: z.string(),
        description: z.string().optional(),
        iconUrl: z.string().url().optional()
    })
});

router.get('/stats', getPlatformStats);
router.get('/users', getAllUsers);
router.put('/institutions/:id/verify', validateRequest(verifySchema), verifyInstitution);
router.post('/categories', validateRequest(categorySchema), createCategory);

export default router;
