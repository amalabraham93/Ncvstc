import mongoose, { Schema, Document } from 'mongoose';

export enum UserRole {
    STUDENT = 'Student',
    INSTITUTION = 'Institution',
    ADMIN = 'Admin'
}

export interface IUser extends Document {
    email: string;
    passwordHash: string;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), required: true },
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);
