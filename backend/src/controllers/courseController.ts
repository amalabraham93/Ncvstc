import { Request, Response } from 'express';
import Course from '../models/Course';
import Category from '../models/Category';
import Institution, { VerificationStatus } from '../models/Institution';

export const getCourses = async (req: Request, res: Response): Promise<void> => {
    try {
        const { category, search, institutionId } = req.query;
        let query: any = { isActive: true };

        if (category) query.categoryId = category;
        if (institutionId) query.institutionId = institutionId;
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }

        const courses = await Course.find(query)
            .populate('categoryId', 'name slug')
            .populate('institutionId', 'name logoUrl')
            .sort({ createdAt: -1 });

        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getCourseById = async (req: Request, res: Response): Promise<void> => {
    try {
        const course = await Course.findById(req.params.id)
            .populate('categoryId', 'name slug')
            .populate('institutionId', 'name logoUrl description website address');

        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }

        res.json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await Category.find().sort({ name: 1 });
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getInstitutions = async (req: Request, res: Response): Promise<void> => {
    try {
        const institutions = await Institution.find({ verificationStatus: VerificationStatus.APPROVED })
            .select('name logoUrl description address website')
            .sort({ name: 1 });

        res.json(institutions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
