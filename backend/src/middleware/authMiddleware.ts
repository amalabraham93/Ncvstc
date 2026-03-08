import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { UserRole } from '../models/User';

export interface AuthRequest extends Request {
    user?: any;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
        return;
    }

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);

        req.user = await User.findById(decoded.id).select('-passwordHash');

        if (!req.user) {
            res.status(401).json({ message: 'Not authorized, user not found' });
            return;
        }

        if (!req.user.isActive) {
            res.status(401).json({ message: 'User account is deactivated' });
            return;
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Not authorized, token failed' });
        return;
    }
};

export const authorize = (...roles: UserRole[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction): void => {
        if (!req.user) {
            res.status(401).json({ message: 'Not authorized' });
            return;
        }

        if (!roles.includes(req.user.role)) {
            res.status(403).json({ message: `User role ${req.user.role} is not authorized to access this route` });
            return;
        }

        next();
    };
};
