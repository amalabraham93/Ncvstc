import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User, { UserRole } from '../models/User';
import Student from '../models/Student';
import Institution from '../models/Institution';

const generateToken = (id: string, role: string) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET as string, {
        expiresIn: '30d',
    });
};

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password, role, ...profileData } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = await User.create({
            email,
            passwordHash,
            role
        });

        if (role === UserRole.STUDENT) {
            await Student.create({
                userId: user._id,
                firstName: profileData.firstName,
                lastName: profileData.lastName,
            });
        } else if (role === UserRole.INSTITUTION) {
            await Institution.create({
                userId: user._id,
                name: profileData.name,
                registrationNumber: profileData.registrationNumber,
            });
        }

        res.status(201).json({
            _id: user._id,
            email: user.email,
            role: user.role,
            token: generateToken(user._id.toString(), user.role),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.passwordHash))) {
            if (!user.isActive) {
                res.status(401).json({ message: 'Account is deactivated' });
                return;
            }

            res.json({
                _id: user._id,
                email: user.email,
                role: user.role,
                token: generateToken(user._id.toString(), user.role),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getMe = async (req: any, res: Response): Promise<void> => {
    try {
        const user = await User.findById(req.user.id).select('-passwordHash');
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        let profile = null;
        if (user.role === UserRole.STUDENT) {
            profile = await Student.findOne({ userId: user._id });
        } else if (user.role === UserRole.INSTITUTION) {
            profile = await Institution.findOne({ userId: user._id });
        }

        res.json({ user, profile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
