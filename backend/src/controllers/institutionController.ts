import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import Institution from '../models/Institution';
import Course from '../models/Course';
import Application, { ApplicationStatus } from '../models/Application';

export const getInstitutionProfile = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const institution = await Institution.findOne({ userId: req.user.id });
        if (!institution) {
            res.status(404).json({ message: 'Institution profile not found' });
            return;
        }
        res.json(institution);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const updateInstitutionProfile = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const institution = await Institution.findOneAndUpdate(
            { userId: req.user.id },
            { $set: req.body },
            { new: true, runValidators: true }
        );
        if (!institution) {
            res.status(404).json({ message: 'Institution profile not found' });
            return;
        }
        res.json(institution);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const createCourse = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const institution = await Institution.findOne({ userId: req.user.id });
        if (!institution) {
            res.status(404).json({ message: 'Institution profile not found' });
            return;
        }

        // Add logic to restrict course creation if not verified
        if (institution.verificationStatus !== 'Approved') {
            res.status(403).json({ message: 'Institution must be approved to create courses' });
            return;
        }

        const { title, slug, description, categoryId, durationMonths, fees, requirements, thumbnailUrl } = req.body;

        const course = await Course.create({
            institutionId: institution._id,
            title,
            slug,
            description,
            categoryId,
            durationMonths,
            fees,
            requirements,
            thumbnailUrl
        });

        res.status(201).json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getMyCourses = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const institution = await Institution.findOne({ userId: req.user.id });
        if (!institution) {
            res.status(404).json({ message: 'Institution profile not found' });
            return;
        }

        const courses = await Course.find({ institutionId: institution._id }).populate('categoryId', 'name');
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getCourseApplications = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const institution = await Institution.findOne({ userId: req.user.id });
        if (!institution) {
            res.status(404).json({ message: 'Institution profile not found' });
            return;
        }

        const applications = await Application.find({ institutionId: institution._id })
            .populate('studentId', 'firstName lastName')
            .populate('courseId', 'title');

        res.json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const updateApplicationStatus = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { status } = req.body;
        const { id } = req.params;

        const institution = await Institution.findOne({ userId: req.user.id });
        if (!institution) {
            res.status(404).json({ message: 'Institution profile not found' });
            return;
        }

        const application = await Application.findOne({ _id: id, institutionId: institution._id });
        if (!application) {
            res.status(404).json({ message: 'Application not found or unauthorized' });
            return;
        }

        application.status = status;
        await application.save();

        res.json(application);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
