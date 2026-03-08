import mongoose, { Schema, Document } from 'mongoose';

export enum ApplicationStatus {
    PENDING = 'Pending',
    UNDER_REVIEW = 'Under Review',
    APPROVED = 'Approved',
    REJECTED = 'Rejected'
}

export interface IApplication extends Document {
    studentId: mongoose.Types.ObjectId;
    courseId: mongoose.Types.ObjectId;
    institutionId: mongoose.Types.ObjectId;
    status: ApplicationStatus;
    documents: string[]; // List of URLs to uploaded documents
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}

const ApplicationSchema: Schema = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', required: true },
    status: {
        type: String,
        enum: Object.values(ApplicationStatus),
        default: ApplicationStatus.PENDING
    },
    documents: [{ type: String }],
    notes: { type: String }
}, {
    timestamps: true
});

// A student can apply to the same course only once
ApplicationSchema.index({ studentId: 1, courseId: 1 }, { unique: true });

export default mongoose.model<IApplication>('Application', ApplicationSchema);
