import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
    userId: mongoose.Types.ObjectId;
    enrollmentNo?: string;
    firstName: string;
    lastName: string;
    phone?: string;
    dateOfBirth?: Date;
    address?: string;
    savedCourses: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const StudentSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    enrollmentNo: { type: String, unique: true, sparse: true, trim: true },
    phone: { type: String, trim: true },
    dateOfBirth: { type: Date },
    address: { type: String },
    savedCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
}, {
    timestamps: true
});

export default mongoose.model<IStudent>('Student', StudentSchema);
