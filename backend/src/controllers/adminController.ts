import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import User, { UserRole } from '../models/User';
import Institution, { VerificationStatus } from '../models/Institution';
import Course from '../models/Course';
import Category from '../models/Category';

// Admin dashboard stats
export const getPlatformStats = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const totalUsers = await User.countDocuments();
        const totalInstitutions = await Institution.countDocuments();
        const totalCourses = await Course.countDocuments();

        // Additional metrics can be added
        res.json({
            totalUsers,
            totalInstitutions,
            totalCourses
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// User management
export const getAllUsers = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const users = await User.find().select('-passwordHash');
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Institution Moderation
export const verifyInstitution = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const institution = await Institution.findByIdAndUpdate(
            id,
            { verificationStatus: status },
            { new: true }
        );

        if (!institution) {
            res.status(404).json({ message: 'Institution not found' });
            return;
        }

        res.json(institution);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Category Management
export const createCategory = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { name, slug, description, iconUrl } = req.body;
        const category = await Category.create({ name, slug, description, iconUrl });
        res.status(201).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
