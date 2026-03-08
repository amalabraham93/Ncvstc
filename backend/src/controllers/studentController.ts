import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import Student from '../models/Student';
import Course from '../models/Course';
import Application, { ApplicationStatus } from '../models/Application';

export const getStudentProfile = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const student = await Student.findOne({ userId: req.user.id }).populate('savedCourses');
        if (!student) {
            res.status(404).json({ message: 'Student profile not found' });
            return;
        }
        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const saveCourse = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { courseId } = req.body;
        const course = await Course.findById(courseId);
        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }

        const student = await Student.findOne({ userId: req.user.id });
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }

        if (!student.savedCourses.includes(course._id as any)) {
            student.savedCourses.push(course._id as any);
            await student.save();
        }

        res.json({ message: 'Course saved successfully', savedCourses: student.savedCourses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const applyForCourse = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { courseId, documents, notes } = req.body;

        const course = await Course.findById(courseId);
        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }

        const student = await Student.findOne({ userId: req.user.id });
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }

        const existingApplication = await Application.findOne({ studentId: student._id, courseId: course._id });
        if (existingApplication) {
            res.status(400).json({ message: 'You have already applied for this course' });
            return;
        }

        const application = await Application.create({
            studentId: student._id,
            courseId: course._id,
            institutionId: course.institutionId,
            documents: documents || [],
            notes
        });

        res.status(201).json(application);
    } catch (error) {
        console.error(error);
        if ((error as any).code === 11000) {
            res.status(400).json({ message: 'Application already exists' });
            return;
        }
        res.status(500).json({ message: 'Server error' });
    }
};

export const getMyApplications = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const student = await Student.findOne({ userId: req.user.id });
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }

        const applications = await Application.find({ studentId: student._id })
            .populate('courseId', 'title')
            .populate('institutionId', 'name');

        res.json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const verifyStudentCertificate = async (req: Request, res: Response): Promise<void> => {
    try {
        const { enrollmentNo } = req.params;

        if (!enrollmentNo) {
            res.status(400).json({ message: 'Enrollment number is required' });
            return;
        }

        const student = await Student.findOne({ enrollmentNo }).select('-phone -address');

        if (!student) {
            res.status(404).json({ message: 'No student found with this enrollment number' });
            return;
        }

        const applications = await Application.find({
            studentId: student._id,
            status: ApplicationStatus.APPROVED
        })
            .populate('courseId', 'title category duration')
            .populate('institutionId', 'name state city');

        res.json({
            student: {
                firstName: student.firstName,
                lastName: student.lastName,
                enrollmentNo: student.enrollmentNo,
                dateOfBirth: student.dateOfBirth
            },
            certificates: applications.map(app => ({
                course: app.courseId,
                institution: app.institutionId,
                status: app.status,
                issuedDate: app.updatedAt
            }))
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
