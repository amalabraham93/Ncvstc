import express from 'express';
import { registerUser, loginUser, getMe } from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';
import { validateRequest } from '../middleware/validateRequest';
import { z } from 'zod';
import { UserRole } from '../models/User';

const router = express.Router();

const registerSchema = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string().min(6),
        role: z.nativeEnum(UserRole),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        name: z.string().optional(),
        registrationNumber: z.string().optional(),
    }).refine(data => {
        if (data.role === UserRole.STUDENT) {
            return !!data.firstName && !!data.lastName;
        }
        if (data.role === UserRole.INSTITUTION) {
            return !!data.name && !!data.registrationNumber;
        }
        return true;
    }, {
        message: "Missing required fields for selected role",
        path: ["role"]
    })
});

const loginSchema = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string()
    })
});

router.post('/register', validateRequest(registerSchema), registerUser);
router.post('/login', validateRequest(loginSchema), loginUser);
router.get('/me', protect, getMe);

export default router;
